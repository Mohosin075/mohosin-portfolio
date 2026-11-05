from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, KeepTogether
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from pathlib import Path
import json
out=Path('public/mohosin-ali-resume.pdf')
styles=getSampleStyleSheet()
styles.add(ParagraphStyle(name='NameTitle',fontName='Helvetica-Bold',fontSize=23,leading=27,textColor=colors.HexColor('#202522'),spaceAfter=5))
styles.add(ParagraphStyle(name='ResumeBody',fontName='Helvetica',fontSize=9.4,leading=13,spaceAfter=5,textColor=colors.HexColor('#333b35')))
styles.add(ParagraphStyle(name='ResumeSection',fontName='Helvetica-Bold',fontSize=11,leading=14,spaceBefore=12,spaceAfter=6,textColor=colors.HexColor('#294a9d')))
styles.add(ParagraphStyle(name='ResumeRole',fontName='Helvetica-Bold',fontSize=10,leading=14,spaceAfter=4))
story=[]
def p(text,style='ResumeBody'): return Paragraph(text,styles[style])
def section(title): story.append(p(title,'ResumeSection'));story.append(HRFlowable(width='100%',thickness=.4,color=colors.HexColor('#d5dad4'),spaceAfter=7))
story += [p('Md Mohosin Ali','NameTitle'),p('Full Stack Developer | Backend Developer'),p('Mohakhali, Dhaka | +880 1981-381386 | mohosinali075@gmail.com'),p('<link href="https://github.com/Mohosin075" color="#294a9d">GitHub</link> | <link href="https://www.linkedin.com/in/mohosin075/" color="#294a9d">LinkedIn</link> | <link href="https://mohosin-portfolio.vercel.app" color="#294a9d">Portfolio</link>')]
section('PROFESSIONAL SUMMARY')
story.append(p('Full Stack Developer delivering software for international clients, with experience in backend systems, full-stack applications and AI integrations. Building secure APIs, designing databases and managing development from architecture to cloud deployment.'))
section('PROFESSIONAL EXPERIENCE')
story.append(p('Backend Developer - Sparktech Agency | Jun 2025 - Present','ResumeRole'))
for item in ['Develop REST APIs with Node.js, Express.js and TypeScript, using MongoDB, PostgreSQL and Prisma.','Build React and Next.js applications with OpenAI, Stripe, Firebase and third-party integrations.','Manage deployments with AWS, Docker, NGINX and PM2; contribute to architecture, code reviews and team collaboration.']:story.append(p('- '+item))
section('TECHNICAL SKILLS')
for title,body in [('Languages','JavaScript (ES6+), TypeScript, SQL'),('Frontend & Mobile','React.js, Next.js, Redux Toolkit, Tailwind CSS, TanStack Query, Flutter, Dart'),('Backend','Node.js, Express.js, Socket.io, Passport.js, JWT, Zod'),('Data & Cloud','MongoDB, Mongoose, PostgreSQL, Prisma, Redis, AWS S3 / EC2, Docker, NGINX, PM2, CI/CD, Vercel'),('Tools & Integrations','Git, GitHub, Postman, npm, Yarn, Stripe, SSLCommerz, Firebase Authentication, OpenAI API')]:story.append(p('<b>'+title+':</b> '+body.replace('&','&amp;')))
section('SELECTED PROJECTS')
for title,body,stack in [('Travel Mapping Platform - Roadtripeado','Developed a full-stack travel platform serving 7,000+ real users, with interactive maps, route planning, location search and paid travel guides. Work also includes subscriptions, real-time messaging and media uploads.','Next.js, Redux Toolkit, Google Maps API, Node.js, Express.js, TypeScript, MongoDB, Stripe, Webhooks'),('Content & Meta Automation - ClipFrame','Built content scheduling and automated Instagram / Facebook publishing through Meta integration, with weekly planning, reusable templates, brand management and subscription limits.','Next.js, Express.js, TypeScript, MongoDB, BullMQ, Redis, Stripe, Webhooks')]:story.append(KeepTogether([p(title,'ResumeRole'),p(body),p('<b>Stack:</b> '+stack),Spacer(1,5)]))
section('EDUCATION')
story.append(p('<b>B.Sc. in Computer Science and Engineering</b> - Northern University Bangladesh | Present'))
story.append(p('<b>Diploma in Computer Technology</b> - Dinajpur Polytechnic Institute | Completed January 2025'))
section('LANGUAGES')
story.append(p('Bangla - Native | English - Basic'))
SimpleDocTemplate(str(out),pagesize=(595.28,841.89),leftMargin=40,rightMargin=40,topMargin=32,bottomMargin=30,title='Md Mohosin Ali - Resume',author='Md Mohosin Ali').build(story)
print(out)
