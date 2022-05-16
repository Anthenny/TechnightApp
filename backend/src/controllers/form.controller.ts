import { NextFunction, Request, Response } from 'express';
import FormModel from '../models/form.model';
import AppError from '../utils/appError';

const catchAsync = require('../utils/catchAsync');
const sendEmail = require('../utils/email');

export const createForm = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, phoneNumber, company, role, refference, checkbox } =
      req.body;

    const formInput = await FormModel.create({
      name,
      email,
      phoneNumber: +phoneNumber,
      company,
      role,
      refference,
      checkbox
    });

    const message = `
                      <h3>Beste ${name},</h3></br>
                      <p style="font-family: sans-serif">In deze email kunt u de overige informatie over de TechNight waar u zich voor heeft aangemeld!</p>
                      <p>Deze maand gaat de TechNight over Flutter en wordt het gepresenteerd door Jeroen Meijer.</p></br>
                      <h4>De volgende onderwerpen zullen besproken worden: </h4>
                      <ul>
                        <li>Wat is Flutter nou eigenlijk?</li>
                        <li>Wat heb ik nodig om te beginnen?</li>
                        <li>Wat is een widget in Flutter?</li>
                        <li>Gezamelijk een app bouwen.</li>
                      </ul>

                      <h3>Hoelaat begint de TechNight?</h3>
                      <p>U bent welkom bij ons vanaf 17:30, we gaan gezamelijk dan lekker pizza of chinees eten. De talk zelf begint om 18:30 en duurt ongeveer tot 19:30.</p></br>
                      
                      <p>Met vriendelijke groet,<p>
                      <p>Anthenny de Hoon</p>`;

    try {
      await sendEmail({
        email,
        subject: 'Informatie over de TechNight!',
        message
      });
    } catch (err) {
      console.log(err);
    }

    return res.status(200).json({
      status: 'succes',
      data: formInput
    });
  }
);

export const getAllFormData = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const formData = await FormModel.find();

    if (!formData) {
      return next(new AppError('We hebben helaas niemand kunnen vinden', 404));
    }
    res.status(200).json({
      status: 'succes',
      data: {
        formData
      }
    });
  }
);

export const getOneFormData = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const formData = await FormModel.findById(req.params.id);

    console.log(formData);

    if (!formData) {
      return next(
        new AppError('We hebben helaas niemand kunnen vinden met dit id', 404)
      );
    }

    res.status(200).json({
      status: 'succes',
      data: {
        formData
      }
    });
  }
);

export const updateFormData = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const formData = await FormModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!formData) {
      return next(
        new AppError('We hebben helaas niemand kunnen vinden met dit id', 404)
      );
    }
    res.status(201).json({
      status: 'succes',
      data: {
        formData
      }
    });
  }
);

export const deleteFormData = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const formData = await FormModel.findByIdAndDelete(req.params.id);

    if (!formData) {
      return next(
        new AppError('We hebben helaas niemand kunnen vinden met dit id', 404)
      );
    }
    res.status(200).json({
      status: 'succes'
    });
  }
);
