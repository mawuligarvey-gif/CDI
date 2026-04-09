# Cultural Diplomat Impact Organization (CDIO) Website

A modern, premium, animated website for the Cultural Diplomat Impact Organization - a NGO dedicated to empowering young African leaders through faith, entrepreneurship, and education.

## 🌟 Features

- **Modern Design**: Clean, minimal, and premium aesthetic with gold and deep blue branding
- **Smooth Animations**: Framer Motion animations throughout for an engaging user experience
- **Responsive Design**: Fully responsive on all devices (mobile, tablet, desktop)
- **optimized Performance**: Fast loading, optimized images, and smooth animations
- **Interactive Components**: Hover effects, parallax scrolling, and dynamic content
- **Multiple Pages**: Comprehensive website structure with 12+ pages

## 🎨 Design System

### Colors
- **Gold**: `#D4AF37` - Leadership, excellence
- **Deep Blue**: `#0A1F44` - Trust, depth
- **White**: `#FFFFFF` - Faith, clarity

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Headings**: Bold, modern sans-serif
- **Body**: Clean and readable

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Type Safety**: Full TypeScript support
- **Icons**: Lucide React

## 📄 Pages

### Main Pages
- **Home**: Hero section, about preview, programs, impact stats, conference highlight, testimonials, CTA
- **About**: Mission, vision, values, team, and organization history
- **Programs**: Detailed breakdown of all 4 programs with benefits
- **Conference**: Annual Cultural Diplomat Impact Conference details
- **Blog**: News and insights from the team
- **Gallery**: Visual showcase of events and activities

### Support Pages
- **Apply**: Application form for programs
- **Contact**: Contact information and message form
- **Testimonials**: Community success stories
- **Team**: Leadership team profiles
- **FAQ**: Frequently asked questions
- **404**: Custom error page

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cultural-diplomat
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🎯 Key Components

### Layout Components
- **Navigation**: Responsive navigation with mobile menu
- **Footer**: Comprehensive footer with links, contact info, and social media
- **Hero**: Full-screen hero with animations and CTA buttons

### Section Components
- **About**: Organization overview with features
- **Programs**: Program cards with details
- **Impact**: Statistics with count-up animations
- **Conference**: Conference highlights with parallax
- **Testimonials**: Carousel with testimonials
- **CTA**: Call-to-action sections

### Form Components
- **Apply Form**: Program application with validation
- **Contact Form**: Message submission form

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ✨ Animation Features

- Fade-in animations on scroll
- Slide-up transitions
- Hover effects on all interactive elements
- Count-up animations for statistics
- Parallax scrolling effects
- Smooth page transitions
- Staggered animations for elements

## 🔐 Environment Variables

Create a `.env.local` file if needed for any API integrations:

```
NEXT_PUBLIC_API_URL=your_api_url
BLOG_ADMIN_PASSWORD=choose-a-strong-password
```

## ✍️ Client Blog Publishing (No-Code)

Your client can publish blog posts directly from a built-in admin page.

1. Start the site with `npm run dev`.
2. Open `/admin/blog` in the browser.
3. Log in with `BLOG_ADMIN_PASSWORD` from `.env.local`.
4. Fill the form and click **Publish Post**.
5. The post appears automatically on `/blog`.

Notes:
- Blog posts are stored in `src/data/blog-posts.json`.
- If `BLOG_ADMIN_PASSWORD` is not set, a default password is used for development only. Set your own password before production.

## 📚 Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── about/
│   ├── programs/
│   ├── apply/
│   ├── contact/
│   ├── conference/
│   ├── blog/
│   ├── gallery/
│   ├── team/
│   ├── testimonials/
│   ├── faq/
│   └── not-found.tsx
├── components/
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Programs.tsx
│       ├── Impact.tsx
│       ├── Conference.tsx
│       ├── Testimonials.tsx
│       └── CTA.tsx
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## 🎯 Performance Optimization

- Image optimization with Next.js Image component
- CSS-in-JS with Tailwind for smaller bundle
- Code splitting with App Router
- Lazy loading of components
- Optimized animations with GPU acceleration

## 🌐 Customization

### Update Branding
1. Edit color values in `tailwind.config.ts`
2. Update organization name in components
3. Replace placeholder images and content

### Add New Pages
1. Create new folder in `src/app`
2. Add `page.tsx` file
3. Use existing components as templates
4. Update Navigation links

### Modify Animations
1. Edit animation values in Framer Motion components
2. Adjust transition durations and delays
3. Customize keyframe animations in `globals.css`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests.

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support, email info@cdio.org or visit the contact page.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

```bash
vercel
```

### Deploy to Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean
- Railway
- Heroku

## 📈 Future Enhancements

- [ ] Backend integration for form submissions
- [ ] Admin dashboard for content management
- [ ] Multi-language support
- [ ] Dark mode
- [ ] Advanced analytics
- [ ] User authentication
- [ ] Email notifications
- [ ] Blog search functionality

## 🎉 Credits

Built with ❤️ for the Cultural Diplomat Impact Organization using modern web technologies.

---

**Made with Framer Motion, Tailwind CSS, and Next.js**
