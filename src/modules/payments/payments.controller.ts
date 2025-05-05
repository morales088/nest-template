import { Controller, Get } from '@nestjs/common';
import { PaymentsService } from './services/payments.service';

@Controller('payments')
export class PaymentsController {
    constructor(private readonly paymentsService: PaymentsService) {}

    @Get('checkout')
    createCheckout() {
        return this.paymentsService.createCheckoutSession();
    }
}
