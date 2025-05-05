import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';

@Injectable()
export class PaymentsService {
  private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
        // apiVersion: '2025-04-30.basil',
    });
  }

  async createCheckoutSession() {
    return this.stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Sample Product',
            },
            unit_amount: 1000, // $10
          },
          quantity: 1,
        },
      ],
      success_url: 'https://your-site.com/success',
      cancel_url: 'https://your-site.com/cancel',
    });
  }
}
