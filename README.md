# Personal Ops Tracker 🚀

**Production-grade task/project management API** built over 16 weeks. From CLI prototype to AWS-deployed backend.

## 🎯 What it does
- Users manage **projects** and **tasks**
- **Role-based access** (owner, member, viewer)
- **Real-world features**: deadlines, priorities, comments, activity logs
- **Production stack**: NestJS, PostgreSQL, Docker, AWS, Terraform, CI/CD

## 🛠️ Tech Stack
Frontend: None (API-first)
Backend: TypeScript + NestJS + Node.js
Database: PostgreSQL
DevOps: Docker, GitHub Actions, AWS, Terraform
API Docs: Swagger/OpenAPI

## 📋 Current Status
| Phase | Status | Features |
|-------|--------|----------|
| Day 1 | ✅ Complete | TypeScript + Node.js setup |
| Phase 1 | ⏳ In Progress | Core task/project logic |
| Phase 2-7 | 🔄 Planned | Full production deployment |

## 🚀 Quick Start (Local)
```bash
npm install
npm run dev
```

## 📊 Architecture
Users → Projects → Tasks → Comments
↓
PostgreSQL (RDS)
↓
AWS (EC2/RDS/S3) via Terraform

## 🎓 Learning Journey
This is my **16-week self-taught backend journey**:
- [x] Week 1-2: TypeScript fundamentals
- [ ] Week 3-4: Testing discipline
- [ ] Week 5-6: HTTP + REST APIs
- [ ] Week 7-8: PostgreSQL + data modeling
- [ ] Week 9-10: NestJS + authentication
- [ ] Week 11-12: Docker + CI/CD
- [ ] Week 13-16: AWS + Terraform deployment

## 🔮 Future Roadmap
- [ ] Multi-tenant support
- [ ] Real-time updates (WebSockets)
- [ ] Analytics dashboard
- [ ] Mobile-first API design

## 🤝 Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md)

## 📄 License
MIT
