# Liberty Moving

Toronto moving website built with React, TypeScript, Vite, and Tailwind CSS.

## Contact

Liberty Moving calls and texts use **(647) 874-3551**. The other business numbers are not used by this website.

## Email booking requests

The embedded form posts to FormSubmit with **shandallee@proton.me** as the recipient. It includes customer name, callback number, reply email, move type, pickup and destination, moving date, preferred arrival window, floor, elevator, room count, and notes. FormSubmit handles the submission and its confirmation page; requests do not reserve a slot or take payment. Liberty Moving confirms availability and price separately.

### Activate before launch

1. Publish this branch to the website's HTTPS address.
2. Submit a clearly labeled test booking request on the published site.
3. Open the activation email in shandallee@proton.me (check spam) and click Activate Form.
4. Submit a second test request and verify it arrives with all details and a working reply-to address.
5. Test the published form on mobile and confirm the provider's spam verification works.

FormSubmit may require activation again if the form's website address changes. Keep its default spam verification enabled; the form also includes a honeypot. Do not collect payment details or sensitive documents through this form.

Documentation: https://formsubmit.co/documentation and https://formsubmit.co/help

## Development and validation

```sh
npm ci
npm run dev
npm run typecheck
npm run build
```

GitHub Actions runs type checking and the production build for pull requests and pushes to main.

Before launch, check call and text links on iPhone and Android, and verify booking email delivery. Confirm actual service availability and business claims, and review the external image assets. Example projects are illustrative.
