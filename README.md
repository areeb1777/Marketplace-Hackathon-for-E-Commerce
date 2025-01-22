# 🛒 Avion Furniture E-commerce Website

![Avion Logo](https://example.com/logo.png)

Welcome to Avion Furniture, your go-to destination for modern and elegant home furniture. This project is built using cutting-edge technologies to provide a seamless and enjoyable shopping experience.

## 🚀 Technologies Used
- **Next.js**: For building the user interface and server-side rendering.
- **Sanity CMS**: To manage and store content, including product information.
- **Clerk**: For secure authentication and user management.
- **ShipEngine API**: To track shipments and manage delivery statuses.
- **Stripe**: To process payments securely.

## 📂 Project Structure
├── .next ├── Documentation ├── node_modules ├── public ├── src │ ├── app │ │ ├── about │ │ ├── api │ │ │ ├── create-checkout-session │ │ │ │ └── route.ts│ │ │ └── order.ts│ │ ├── cart │ │ ├── checkout │ │ │ └── page.tsx│ │ ├── contact │ │ │ └── page.tsx│ │ ├── fonts │ │ ├── products │ │ ├── profile │ │ ├── sign-in │ │ │ ├── factor-one │ │ │ └── page.tsx│ │ ├── sign-up │ │ │ ├── verify-email-address │ │ │ │ └── page.tsx│ │ │ └── page.tsx│ │ ├── studio │ │ ├── success │ │ │ └── page.tsx│ │ ├── tracking │ │ │ └── page.tsx│ │ ├── favicon.ico│ │ ├── globals.css│ │ ├── layout.tsx│ │ ├── loading.tsx│ │ └── page.tsx│ ├── components │ │ ├── AboutEmailSignUp.tsx│ │ ├── AboutFeatureSection.tsx│ │ ├── AboutPageHeaders.tsx│ │ ├── CheckoutForm.tsx│ │ ├── ClientImage.tsx│ │ ├── ContactForm.tsx│ │ ├── EmailSignUp.tsx│ │ ├── Features.tsx│ │ ├── Filters.tsx│ │ ├── Footer.tsx│ │ ├── Hero.tsx│ │ ├── ImageOnly.tsx│ │ ├── Listing.tsx│ │ ├── Loader.tsx│ │ ├── OrderPlacement.tsx│ │ ├── PopularListing.tsx│ │ ├── ProductsListing.tsx│ │ ├── Profile.tsx│ │ ├── ShoppingBasket.tsx│ │ ├── StorySection.tsx│ │ ├── TopNavbar.tsx│ │ └── Tracking.tsx│ ├── context │ │ └── CartContext.tsx│ ├── pages │ │ └── _document.js │ ├── sanity │ ├── types │ └── svg.d.ts├── .env.local ├── .eslintrc.json ├── .gitignore ├── middleware.ts├── next-env.d.ts├── next.config.ts├── package-lock.json├── package.json├── postcss.config.mjs├── README.md├── sanity.cli.ts├── sanity.config.ts├── server.js├── tailwind.config.ts├── tsconfig.json└── webpack.config.js

## 📦 API Endpoints
### Product Endpoints
- **GET /products**
  - Fetches all available products.
  - Example response:
    ```json
    {
      "id": 1,
      "name": "Product A",
      "price": 100,
      "stock": 20,
      "image": "url_to_image"
    }
    ```

- **POST /orders**
  - Creates a new order.
  - Payload example:
    ```json
    {
      "customerInfo": {
        "name": "John Doe",
        "email": "john@example.com",
        "address": "123 Main St"
      },
      "productDetails": [
        {
          "productId": 1,
          "quantity": 2
        }
      ],
      "paymentStatus": "Paid"
    }
    ```
  - Example response:
    ```json
    {
      "orderId": 123,
      "status": "Success"
    }
    ```

### Shipment Endpoint
- **GET /shipment**
  - Tracks order status via third-party API.
  - Example response:
    ```json
    {
      "shipmentId": "SHIP123",
      "orderId": 123,
      "status": "In Transit",
      "expectedDeliveryDate": "2025-01-20"
    }
    ```

## 🛠 Environment Variables
Ensure the following environment variables are set in your `.env` file:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`
- `NEXT_PUBLIC_CLERK_FRONTEND_API`
- `SANITY_API_TOKEN`
- `STRIPE_PUBLIC_KEY`
- `STRIPE_SECRET_KEY`

## 🎨 Styling & Responsiveness
The site is fully responsive and styled using modern CSS techniques to ensure a smooth user experience across all devices.

## 🔍 Lighthouse Performance Report
![Lighthouse Report](https://example.com/lighthouse.png)
- **Performance:** 98
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 92

## 🚧 Final Checklist
| Task                       | Status |
|----------------------------|--------|
| Deployment Preparation     | ✓      |
| Staging Environment Setting| ✓      |
| Documentation              | ✓      |
| Form Submission            | ✓      |
| Final Review               | ✓      |

## 📜 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 📞 Contact
For any inquiries, please contact us at [support@avion.com](mailto:support@avion.com).

---

![Footer Logo](https://example.com/footer-logo.png)
