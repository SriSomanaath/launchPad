export const posts = [
  {
    id: 1,
    title: "Excited to Join the Community!",
    author: "Lisa Jones",
    authorImage: "/images/lisa.jpg",
    date: "Mar 12th",
    content: "Hello from Bali! I am a creator in the health & wellness space and I am super excited to join the community! I’ve been on a journey to help people lead healthier lives through mindfulness, nutrition, and fitness. Over the past five years, I have worked with clients worldwide, focusing on sustainable lifestyle changes that promote overall well-being. I believe in the power of holistic health and the importance of balance. Looking forward to engaging with like-minded individuals here and learning from all of you. Let’s grow together!",
    likes: 34,
    likedUsers: [
      { user: "Alice", userImage: "/avatar2.png" },
      { user: "Bob", userImage: "/avatar3.png" },
    ],
    comments:[
      {
        id: 1,
        user: "Sid Yadav",
        userImage: "https://example.com/sid.jpg", // Profile picture URL
        text: "Testing from Teachable on the welcome topic!",
        date: "8 days ago",
        isAdmin: true, // Shows the "ADMIN" badge
        replies: [
          {
            id: 3,
            user: "Sid Yadav",
            userImage: "https://example.com/sid.jpg",
            text: "Awesome - here's a reply",
            date: "8 days ago",
            isAdmin: true,
          },
        ],
      },
      {
        id: 2,
        user: "Tina",
        userImage: "https://example.com/tina.jpg",
        text: "Congrats on the launch!",
        date: "5 days ago",
        isAdmin: false,
        replies: [],
      },
      {
        id: 4,
        user: "Leo",
        userImage: "https://example.com/leo.jpg",
        text: "Sounds interesting! Will check it out.",
        date: "2 days ago",
        isAdmin: false,
        replies: [],
      },
    ]
  },
  {
    id: 2,
    title: "AI-Powered Automation: My Latest Project",
    author: "Michael Chen",
    authorImage: "/images/michael.jpg",
    date: "Mar 15th",
    content: "Just wrapped up a major project on AI-powered automation. Excited to share my insights soon! The project revolved around leveraging machine learning to optimize repetitive tasks in the finance sector, leading to a 40% efficiency boost. We implemented an advanced NLP model to extract key insights from unstructured data, making financial decision-making more streamlined. This experience has given me a deeper appreciation for AI's impact on business. I’ll be writing a detailed blog post about the process and our learnings. Would love to hear from others working in AI!",
    likes: 57,
    likedUsers: [
      { user: "Alice", userImage: "/avatar2.png" },
      { user: "Bob", userImage: "/avatar3.png" },
    ],
    comments: [
      { id: 1, user: "James", text: "Can't wait to hear more!" },
      { id: 2, user: "Sophia", text: "That sounds amazing!" }
    ]
  },
  {
    id: 3,
    title: "Starting My Blockchain Journey",
    author: "Sara Patel",
    authorImage: "/images/sara.jpg",
    date: "Mar 18th",
    content: "Started my journey into blockchain development. Any tips for a beginner? I've been diving into Solidity, exploring smart contracts, and learning about the intricacies of decentralized applications (dApps). The potential of blockchain technology to revolutionize industries fascinates me, and I am eager to understand its real-world applications. One challenge I’m facing is designing gas-efficient contracts. If anyone has experience with optimizing smart contracts for scalability, I’d love some advice! Excited to be part of this evolving space.",
    likes: 42,
    likedUsers: [
      { user: "Alice", userImage: "/avatar2.png" },
      { user: "Bob", userImage: "/avatar3.png" },
    ],
    comments:[
      {
        id: 1,
        user: "Sid Yadav",
        userImage: "https://example.com/sid.jpg", // Profile picture URL
        text: "Testing from Teachable on the welcome topic!",
        date: "8 days ago",
        isAdmin: true, // Shows the "ADMIN" badge
        replies: [
          {
            id: 3,
            user: "Sid Yadav",
            userImage: "https://example.com/sid.jpg",
            text: "Awesome - here's a reply",
            date: "8 days ago",
            isAdmin: true,
          },
        ],
      },
      {
        id: 2,
        user: "Tina",
        userImage: "https://example.com/tina.jpg",
        text: "Congrats on the launch!",
        date: "5 days ago",
        isAdmin: false,
        replies: [],
      },
      {
        id: 4,
        user: "Leo",
        userImage: "https://example.com/leo.jpg",
        text: "Sounds interesting! Will check it out.",
        date: "2 days ago",
        isAdmin: false,
        replies: [],
      },
    ]
  },
  {
    id: 4,
    title: "Launching My First SaaS Product!",
    author: "David Lee",
    authorImage: "/images/david.jpg",
    date: "Mar 20th",
    content: "Just launched my first SaaS product! Looking for beta testers, DM me if interested. The journey of building this from scratch has been incredible, from validating the idea to developing a scalable MVP. Our tool helps remote teams track productivity without invasive monitoring, focusing on deep work and outcome-driven progress. We are integrating AI to provide intelligent insights on time management. If you're interested in testing and providing feedback, please reach out! Open to collaborations and feature suggestions.",
    likes: 89,
    likedUsers: [
      { user: "Alice", userImage: "/avatar2.png" },
      { user: "Bob", userImage: "/avatar3.png" },
    ],
    comments:[
      {
        id: 1,
        user: "Sid Yadav",
        userImage: "https://example.com/sid.jpg", // Profile picture URL
        text: "Testing from Teachable on the welcome topic!",
        date: "8 days ago",
        isAdmin: true, // Shows the "ADMIN" badge
        replies: [
          {
            id: 3,
            user: "Sid Yadav",
            userImage: "https://example.com/sid.jpg",
            text: "Awesome - here's a reply",
            date: "8 days ago",
            isAdmin: true,
          },
        ],
      },
      {
        id: 2,
        user: "Tina",
        userImage: "https://example.com/tina.jpg",
        text: "Congrats on the launch!",
        date: "5 days ago",
        isAdmin: false,
        replies: [],
      },
      {
        id: 4,
        user: "Leo",
        userImage: "https://example.com/leo.jpg",
        text: "Sounds interesting! Will check it out.",
        date: "2 days ago",
        isAdmin: false,
        replies: [],
      },
    ]
  },
  {
    id: 5,
    title: "My First Half-Marathon Experience",
    author: "Emily Smith",
    authorImage: "/images/emily.jpg",
    date: "Mar 22nd",
    content: "Just finished my first half-marathon! Feeling so accomplished. Training for this has been an intense yet rewarding experience. I followed a structured plan with interval training, long runs, and proper recovery strategies. Nutrition played a huge role, and I learned how crucial hydration and fueling are for endurance sports. The race itself was challenging but exhilarating, and crossing that finish line was an unforgettable moment. Now, I’m setting my sights on a full marathon. Any marathon runners here? Would love some training tips!",
    likes: 65,
    likedUsers: [
      { user: "Alice", userImage: "/avatar2.png" },
      { user: "Bob", userImage: "/avatar3.png" },
    ],
    comments:[
      {
        id: 1,
        user: "Sid Yadav",
        userImage: "https://example.com/sid.jpg", // Profile picture URL
        text: "Testing from Teachable on the welcome topic!",
        date: "8 days ago",
        isAdmin: true, // Shows the "ADMIN" badge
        replies: [
          {
            id: 3,
            user: "Sid Yadav",
            userImage: "https://example.com/sid.jpg",
            text: "Awesome - here's a reply",
            date: "8 days ago",
            isAdmin: true,
          },
        ],
      },
      {
        id: 2,
        user: "Tina",
        userImage: "https://example.com/tina.jpg",
        text: "Congrats on the launch!",
        date: "5 days ago",
        isAdmin: false,
        replies: [],
      },
      {
        id: 4,
        user: "Leo",
        userImage: "https://example.com/leo.jpg",
        text: "Sounds interesting! Will check it out.",
        date: "2 days ago",
        isAdmin: false,
        replies: [],
      },
    ]
  },
  {
    id: 6,
    title: "Joining a New Startup as Lead Developer",
    author: "Ryan Gomez",
    authorImage: "/images/ryan.jpg",
    date: "Mar 25th",
    content: "Excited to announce that I've joined a new startup as a lead developer! It's a dynamic fintech company that’s revolutionizing payment processing using AI-driven fraud detection. The tech stack is modern, using TypeScript, GraphQL, and AWS microservices. My role will involve architecting scalable backend solutions while ensuring security compliance. If anyone here has experience scaling fintech platforms, I'd love to connect and exchange insights! Looking forward to sharing my journey and learning from this community.",
    likes: 78,
    likedUsers: [
      { user: "Alice", userImage: "/avatar2.png" },
      { user: "Bob", userImage: "/avatar3.png" },
    ],
    comments:[
      {
        id: 1,
        user: "Sid Yadav",
        userImage: "https://example.com/sid.jpg", // Profile picture URL
        text: "Testing from Teachable on the welcome topic!",
        date: "8 days ago",
        isAdmin: true, // Shows the "ADMIN" badge
        replies: [
          {
            id: 3,
            user: "Sid Yadav",
            userImage: "https://example.com/sid.jpg",
            text: "Awesome - here's a reply",
            date: "8 days ago",
            isAdmin: true,
          },
        ],
      },
      {
        id: 2,
        user: "Tina",
        userImage: "https://example.com/tina.jpg",
        text: "Congrats on the launch!",
        date: "5 days ago",
        isAdmin: false,
        replies: [],
      },
      {
        id: 4,
        user: "Leo",
        userImage: "https://example.com/leo.jpg",
        text: "Sounds interesting! Will check it out.",
        date: "2 days ago",
        isAdmin: false,
        replies: [],
      },
    ]
  },
  {
    id: 7,
    title: "Off to Japan for Two Weeks!",
    author: "Sophia Kim",
    authorImage: "/images/sophia.jpg",
    date: "Mar 27th",
    content: "Taking a break from work and heading to Japan for two weeks! I’ve been planning this trip for months and can’t wait to immerse myself in Japanese culture. From exploring the streets of Tokyo to hiking in Kyoto, my itinerary is packed. I’m especially looking forward to trying authentic ramen, sushi, and matcha desserts. If anyone has must-visit recommendations—hidden gems, local food spots, or unique experiences—I’d love to hear them! I’ll be sharing my travel experiences here. Stay tuned!",
    likes: 95,
    likedUsers: [
      { user: "Alice", userImage: "/avatar2.png" },
      { user: "Bob", userImage: "/avatar3.png" },
    ],
    comments:[
      {
        id: 1,
        user: "Sid Yadav",
        userImage: "https://example.com/sid.jpg", // Profile picture URL
        text: "Testing from Teachable on the welcome topic!",
        date: "8 days ago",
        isAdmin: true, // Shows the "ADMIN" badge
        replies: [
          {
            id: 3,
            user: "Sid Yadav",
            userImage: "https://example.com/sid.jpg",
            text: "Awesome - here's a reply",
            date: "8 days ago",
            isAdmin: true,
          },
        ],
      },
      {
        id: 2,
        user: "Tina",
        userImage: "https://example.com/tina.jpg",
        text: "Congrats on the launch!",
        date: "5 days ago",
        isAdmin: false,
        replies: [],
      },
      {
        id: 4,
        user: "Leo",
        userImage: "https://example.com/leo.jpg",
        text: "Sounds interesting! Will check it out.",
        date: "2 days ago",
        isAdmin: false,
        replies: [],
      },
    ]
  },
  {
    id: 8,
    title: "The Future of Cybersecurity",
    author: "Nathan Rodriguez",
    authorImage: "/images/nathan.jpg",
    date: "Mar 30th",
    content: "I just published my latest blog post on the future of cybersecurity. With data breaches on the rise, the need for advanced security measures has never been greater. In this article, I discuss the role of AI in threat detection, the importance of zero-trust security models, and emerging trends in cloud security. It took weeks of research, but I’m proud of the insights shared. Would love for you all to check it out and share your thoughts! Let’s talk security!",
    likes: 61,
    likedUsers: [
      { user: "Alice", userImage: "/avatar2.png" },
      { user: "Bob", userImage: "/avatar3.png" },
    ],
    comments:[
      {
        id: 1,
        user: "Sid Yadav",
        userImage: "https://example.com/sid.jpg", // Profile picture URL
        text: "Testing from Teachable on the welcome topic!",
        date: "8 days ago",
        isAdmin: true, // Shows the "ADMIN" badge
        replies: [
          {
            id: 3,
            user: "Sid Yadav",
            userImage: "https://example.com/sid.jpg",
            text: "Awesome - here's a reply",
            date: "8 days ago",
            isAdmin: true,
          },
        ],
      },
      {
        id: 2,
        user: "Tina",
        userImage: "https://example.com/tina.jpg",
        text: "Congrats on the launch!",
        date: "5 days ago",
        isAdmin: false,
        replies: [],
      },
      {
        id: 4,
        user: "Leo",
        userImage: "https://example.com/leo.jpg",
        text: "Sounds interesting! Will check it out.",
        date: "2 days ago",
        isAdmin: false,
        replies: [],
      },
    ]
  },
  {
    id: 9,
    title: "Launching My Podcast: The Creative Mindset",
    author: "Olivia Parker",
    authorImage: "/images/olivia.jpg",
    date: "Apr 2nd",
    content: "Just launched my first podcast episode! It’s called 'The Creative Mindset' and focuses on helping artists and creators navigate their journey in the digital space. We discuss branding, monetization, and creative block. Would love for you to listen and share your thoughts. Let me know what topics you'd like covered in future episodes!",
    likes: 80,
    likedUsers: [
      { user: "Alice", userImage: "/avatar2.png" },
      { user: "Bob", userImage: "/avatar3.png" },
    ],
    comments:[
      {
        id: 1,
        user: "Sid Yadav",
        userImage: "https://example.com/sid.jpg", // Profile picture URL
        text: "Testing from Teachable on the welcome topic!",
        date: "8 days ago",
        isAdmin: true, // Shows the "ADMIN" badge
        replies: [
          {
            id: 3,
            user: "Sid Yadav",
            userImage: "https://example.com/sid.jpg",
            text: "Awesome - here's a reply",
            date: "8 days ago",
            isAdmin: true,
          },
        ],
      },
      {
        id: 2,
        user: "Tina",
        userImage: "https://example.com/tina.jpg",
        text: "Congrats on the launch!",
        date: "5 days ago",
        isAdmin: false,
        replies: [],
      },
      {
        id: 4,
        user: "Leo",
        userImage: "https://example.com/leo.jpg",
        text: "Sounds interesting! Will check it out.",
        date: "2 days ago",
        isAdmin: false,
        replies: [],
      },
    ]
  }
];


  export const discussions = [
    {
      id: "cv101",
      title: "Best Pretrained Models for Object Detection",
      content: "What are the best pretrained models for object detection in 2025? I'm considering YOLOv8, Faster R-CNN, and DETR.",
      author: "ai_researcher",
      authorAvatar: "https://example.com/avatar1.jpg",
      createdAt: "2025-03-20T10:00:00Z",
      updatedAt: "2025-03-22T08:45:00Z",
      tags: ["Computer Vision", "Object Detection", "Deep Learning"],
      commentsCount: 12,
      likesCount: 60,
      viewsCount: 450,
      status: "Open",
      lastActivityAt: "2025-03-22T09:00:00Z",
      lastCommentAuthor: "ml_expert",
      attachments: [],
      isPinned: false,
      isLocked: false
    },
    {
      id: "cv102",
      title: "How to Improve Image Segmentation Models?",
      content: "I'm working with U-Net and DeepLabV3 for image segmentation. Any tips to boost accuracy and reduce inference time?",
      author: "cv_engineer",
      authorAvatar: "https://example.com/avatar2.jpg",
      createdAt: "2025-03-21T14:30:00Z",
      updatedAt: "2025-03-23T07:20:00Z",
      tags: ["Computer Vision", "Image Segmentation", "AI"],
      commentsCount: 8,
      likesCount: 48,
      viewsCount: 320,
      status: "Open",
      lastActivityAt: "2025-03-23T07:30:00Z",
      lastCommentAuthor: "segmentation_guru",
      attachments: [
        {
          filename: "segmentation-tips.pdf",
          url: "https://example.com/files/segmentation-tips.pdf"
        }
      ],
      isPinned: true,
      isLocked: false
    },
    {
      id: "cv103",
      title: "Real-Time Face Recognition on Edge Devices",
      content: "What are the best approaches for deploying real-time face recognition models on low-power edge devices?",
      author: "edge_ai_dev",
      authorAvatar: "https://example.com/avatar3.jpg",
      createdAt: "2025-03-18T09:15:00Z",
      updatedAt: "2025-03-22T18:30:00Z",
      tags: ["Face Recognition", "Edge AI", "Computer Vision"],
      commentsCount: 10,
      likesCount: 75,
      viewsCount: 550,
      status: "Open",
      lastActivityAt: "2025-03-22T19:00:00Z",
      lastCommentAuthor: "hardware_optim",
      attachments: [],
      isPinned: false,
      isLocked: false
    },
    {
      id: "cv104",
      title: "Best Datasets for Training AI-Based Medical Imaging Models",
      content: "Can anyone suggest high-quality datasets for training AI models in medical image analysis? Preferably for X-rays and MRIs.",
      author: "med_ai_researcher",
      authorAvatar: "https://example.com/avatar4.jpg",
      createdAt: "2025-03-17T11:45:00Z",
      updatedAt: "2025-03-21T13:20:00Z",
      tags: ["Medical Imaging", "AI", "Deep Learning"],
      commentsCount: 14,
      likesCount: 90,
      viewsCount: 610,
      status: "Open",
      lastActivityAt: "2025-03-21T14:00:00Z",
      lastCommentAuthor: "med_data_scientist",
      attachments: [
        {
          filename: "medical-dataset-links.txt",
          url: "https://example.com/files/medical-dataset-links.txt"
        }
      ],
      isPinned: true,
      isLocked: false
    },
    {
      id: "cv105",
      title: "Building AI-Powered OCR Systems",
      content: "What are the best models and techniques for creating an OCR system that works well on noisy images?",
      author: "nlp_vision",
      authorAvatar: "https://example.com/avatar5.jpg",
      createdAt: "2025-03-19T16:00:00Z",
      updatedAt: "2025-03-22T12:00:00Z",
      tags: ["OCR", "Computer Vision", "AI"],
      commentsCount: 9,
      likesCount: 55,
      viewsCount: 400,
      status: "Open",
      lastActivityAt: "2025-03-22T12:15:00Z",
      lastCommentAuthor: "ocr_expert",
      attachments: [],
      isPinned: false,
      isLocked: false
    },
    {
      id: "cv106",
      title: "Using Transformers for Image Classification",
      content: "How effective are transformer-based models like Vision Transformers (ViT) compared to CNNs for image classification tasks?",
      author: "dl_researcher",
      authorAvatar: "https://example.com/avatar6.jpg",
      createdAt: "2025-03-20T08:20:00Z",
      updatedAt: "2025-03-23T11:45:00Z",
      tags: ["Vision Transformers", "Deep Learning", "Computer Vision"],
      commentsCount: 11,
      likesCount: 72,
      viewsCount: 500,
      status: "Open",
      lastActivityAt: "2025-03-23T12:00:00Z",
      lastCommentAuthor: "transformer_guru",
      attachments: [
        {
          filename: "ViT-vs-CNN.pdf",
          url: "https://example.com/files/ViT-vs-CNN.pdf"
        }
      ],
      isPinned: false,
      isLocked: false
    }
  ];

  export const categories = ["All Courses", "OpenCV", "Deep Learning", "Generative AI"];
  
  export const opencvCourses = [
    {
      id: "dlap101",
      title: "Computer Vision & Deep Learning Applications",
      description: "Build systems and applications using advanced Computer Vision and Deep Learning techniques, and understand deployment using cloud-based services.",
      duration: "10 weeks",
      level: "Advanced",
      instructor: "Dr. Satya Mallick",
      tags: ["Deep Learning", "Computer Vision", "Applications"],
      enrollmentOpen: true,
      lessons: 20,
      studentsEnrolled: 2500,
      rating: 4.8,
      thumbnail: "/C2-Computer_Vision_2_Applications.jpeg"
    },
    {
      id: "dltk102",
      title: "Deep Learning with TensorFlow & Keras",
      description: "Gain in-depth knowledge about Neural Networks, prepare datasets and study DeepNet architectures used for solving various Computer Vision problems.",
      duration: "8 weeks",
      level: "Intermediate",
      instructor: "Dr. Andrew Ng",
      tags: ["Deep Learning", "TensorFlow", "Keras"],
      enrollmentOpen: true,
      lessons: 18,
      studentsEnrolled: 3000,
      rating: 4.9,
      thumbnail: "/C4-Deepl_Learning_with_Keras_and_TensorFlow.jpeg"
    },
    {
      id: "dlpt103",
      title: "Deep Learning with PyTorch 2.x",
      description: "Start solving Computer Vision problems using Deep Learning techniques and the PyTorch framework. Dive into the architecture of Neural Networks, and learn how to train and deploy them on the cloud.",
      duration: "9 weeks",
      level: "Advanced",
      instructor: "Dr. Yann LeCun",
      tags: ["Deep Learning", "PyTorch", "Computer Vision"],
      enrollmentOpen: true,
      lessons: 22,
      studentsEnrolled: 2200,
      rating: 4.7,
      thumbnail: "/c3_thumbnail.jpeg"
    },
    {
      id: "cvip104",
      title: "Fundamentals of Computer Vision & Image Processing",
      description: "Build a solid understanding of OpenCV tools used for Image Processing, Computer Vision, and Video Processing, and lay a strong foundation for solving Computer Vision problems.",
      duration: "6 weeks",
      level: "Beginner",
      instructor: "Dr. Adrian Rosebrock",
      tags: ["OpenCV", "Image Processing", "Computer Vision"],
      enrollmentOpen: true,
      lessons: 15,
      studentsEnrolled: 1800,
      rating: 4.8,
      thumbnail: "/Computer-Vision-1.jpeg"
    },
    {
      id: "mocv105",
      title: "Mastering OpenCV with Python",
      description: "Start your AI journey by learning the fundamentals of Image Processing and Computer Vision through 21 modules, video instructions, code explanations, and example applications.",
      duration: "7 weeks",
      level: "Beginner",
      instructor: "Dr. Satya Mallick",
      tags: ["OpenCV", "Python", "Computer Vision"],
      enrollmentOpen: true,
      lessons: 21,
      studentsEnrolled: 2300,
      rating: 4.9,
      thumbnail: "/cO-thumbnail.jpg"
    },
    {
      id: "genai106",
      title: "Mastering Generative AI for Art",
      description: "Dive deep into Stable Diffusion. Learn all the techniques of generating images, fine-tuning Stable Diffusion on your own images and even training a GPT language model.",
      duration: "8 weeks",
      level: "Advanced",
      instructor: "Dr. Ian Goodfellow",
      tags: ["Generative AI", "Stable Diffusion", "Art"],
      enrollmentOpen: true,
      lessons: 19,
      studentsEnrolled: 1700,
      rating: 4.7,
      thumbnail: "/Mastering-AI-Art-Generation.jpg"
    }
  ];

  export const freeCourses = [
    {
      id: "cvf101",
      title: "Getting Started with OpenCV",
      description: "Learn the basics of OpenCV and set up your development environment.",
      duration: "4 weeks",
      level: "Beginner",
      instructor: "Dr. Satya Mallick",
      enrollmentOpen: true,
      lessons: 6,
      studentsEnrolled: 5000,
      rating: 4.7,
      thumbnail: "https://example.com/course-thumbnails/cvf101.jpg"
    },
    {
      id: "cvf102",
      title: "Introduction to Image Processing",
      description: "Understand fundamental image processing techniques using OpenCV.",
      duration: "5 weeks",
      level: "Beginner",
      instructor: "Dr. Adrian Rosebrock",
      enrollmentOpen: true,
      lessons: 8,
      studentsEnrolled: 6200,
      rating: 4.8,
      thumbnail: "https://example.com/course-thumbnails/cvf102.jpg"
    },
    {
      id: "cvf103",
      title: "Python for Computer Vision",
      description: "Learn how to use Python for image analysis and computer vision tasks.",
      duration: "6 weeks",
      level: "Beginner",
      instructor: "Dr. Richard Szeliski",
      enrollmentOpen: true,
      lessons: 10,
      studentsEnrolled: 7000,
      rating: 4.9,
      thumbnail: "https://example.com/course-thumbnails/cvf103.jpg"
    }
  ];
  
  export const communityMembers = [
    {
      id: "cm101",
      name: "Alice Johnson",
      location: "San Francisco, USA",
      badge: "Visionary",
      contributions: 120,
      description: "Expert in deep learning and real-time object detection. Contributor to OpenCV open-source projects.",
      profilePicture: "https://example.com/profiles/alice.jpg"
    },
    {
      id: "cm102",
      name: "Rahul Sharma",
      location: "Bangalore, India",
      badge: "AI Innovator",
      contributions: 95,
      description: "Developed AI-powered OCR solutions. Active mentor in computer vision forums.",
      profilePicture: "https://example.com/profiles/rahul.jpg"
    },
    {
      id: "cm103",
      name: "Chen Wei",
      location: "Beijing, China",
      badge: "Machine Learning Guru",
      contributions: 130,
      description: "Researcher in AI-driven medical imaging and semantic segmentation.",
      profilePicture: "https://example.com/profiles/chen.jpg"
    },
    {
      id: "cm104",
      name: "Maria Gonzalez",
      location: "Madrid, Spain",
      badge: "Computer Vision Pioneer",
      contributions: 80,
      description: "Worked on autonomous vehicle perception systems using OpenCV and PyTorch.",
      profilePicture: "https://example.com/profiles/maria.jpg"
    },
    {
      id: "cm105",
      name: "David Brown",
      location: "London, UK",
      badge: "AI Educator",
      contributions: 110,
      description: "Professor specializing in AI ethics and explainable AI in vision models.",
      profilePicture: "https://example.com/profiles/david.jpg"
    },
    {
      id: "cm106",
      name: "Sophia Lee",
      location: "Seoul, South Korea",
      badge: "Open Source Contributor",
      contributions: 105,
      description: "Maintainer of multiple OpenCV-based open-source repositories.",
      profilePicture: "https://example.com/profiles/sophia.jpg"
    },
    {
      id: "cm107",
      name: "Ahmed Khalil",
      location: "Cairo, Egypt",
      badge: "AI Enthusiast",
      contributions: 70,
      description: "Specialist in AI-powered facial recognition and biometric authentication.",
      profilePicture: "https://example.com/profiles/ahmed.jpg"
    },
    {
      id: "cm108",
      name: "Elena Petrova",
      location: "Moscow, Russia",
      badge: "Computer Vision Evangelist",
      contributions: 90,
      description: "Speaker at international AI conferences and author of CV research papers.",
      profilePicture: "https://example.com/profiles/elena.jpg"
    },
    {
      id: "cm109",
      name: "Gabriel Souza",
      location: "São Paulo, Brazil",
      badge: "AI Researcher",
      contributions: 115,
      description: "Developed AI models for sports analytics and action recognition.",
      profilePicture: "https://example.com/profiles/gabriel.jpg"
    },
    {
      id: "cm110",
      name: "Hiroshi Tanaka",
      location: "Tokyo, Japan",
      badge: "Deep Learning Expert",
      contributions: 125,
      description: "Worked on AI-driven robotics vision and generative AI applications.",
      profilePicture: "https://example.com/profiles/hiroshi.jpg"
    }
  ];

  export const hackathons = [
    {
      id: "hack101",
      name: "AI Vision Challenge",
      location: "San Francisco, USA",
      date: "2024-09-15",
      description:
        "AI Vision Challenge is one of the biggest hackathons dedicated to advancing computer vision applications. This event brings together AI researchers, developers, and engineers to tackle complex real-world problems. Participants work on challenges such as autonomous vehicle navigation, medical imaging diagnostics, security surveillance enhancement, and facial recognition improvements. The hackathon provides access to cutting-edge tools, including OpenCV, TensorFlow, and PyTorch, allowing teams to develop robust AI-powered solutions. Workshops and mentorship sessions led by industry experts offer insights into the latest trends in deep learning and neural networks. The competition is structured to encourage collaboration, rapid prototyping, and hands-on coding, ensuring participants gain valuable experience in building scalable AI applications. Winning teams receive cash prizes, potential startup funding, and job opportunities with top AI companies, making it an unmissable event for AI enthusiasts looking to innovate in the field of computer vision.",
      website: "https://aivisionchallenge.com"
    },
    {
      id: "hack102",
      name: "Deep Learning Vision Hack",
      location: "London, UK",
      date: "2024-10-20",
      description:
        "The Deep Learning Vision Hack is an advanced AI and computer vision hackathon designed for data scientists, AI researchers, and machine learning engineers. Participants are given high-level problems related to image segmentation, object tracking, scene understanding, and generative adversarial networks (GANs). The event includes interactive workshops on convolutional neural networks (CNNs), transfer learning techniques, and model optimization strategies. Participants get hands-on experience working with large-scale datasets and high-performance GPUs for training deep learning models. The hackathon fosters a competitive yet collaborative environment where teams refine their problem-solving skills while working with AI industry leaders. The best projects stand a chance to be published in AI research journals and gain exposure in the global AI community. Winners receive mentorship from top AI professionals, funding for AI startups, and potential internship or job placements in leading technology firms.",
      website: "https://dlvisionhack.com"
    },
    {
      id: "hack103",
      name: "OpenCV AI Hackathon",
      location: "Bangalore, India",
      date: "2024-11-05",
      description:
        "The OpenCV AI Hackathon is a globally recognized competition for developers and AI enthusiasts looking to innovate using OpenCV and machine learning. The hackathon emphasizes real-world applications such as AI-powered video analytics, pose estimation, intelligent surveillance, and AR/VR-enhanced user experiences. Participants receive access to extensive OpenCV documentation, pre-trained AI models, and high-performance computing resources to accelerate development. The event features industry talks on optimizing deep learning models for edge devices, ethical AI implementation, and scalable AI deployment. Teams are encouraged to experiment with new techniques in unsupervised learning, multi-modal AI fusion, and reinforcement learning to push the boundaries of computer vision. Top-performing teams gain recognition in the AI research community, receive grants to further develop their projects, and get opportunities for direct collaboration with leading AI firms. This hackathon is ideal for those looking to transition their academic knowledge into real-world AI solutions.",
      website: "https://opencvaihack.com"
    },
    {
      id: "hack104",
      name: "VisionAI Global Hack",
      location: "Berlin, Germany",
      date: "2025-01-12",
      description:
        "VisionAI Global Hack is a premier AI and computer vision hackathon designed to push the frontiers of AI-powered applications in various industries. Participants tackle sophisticated challenges in areas such as healthcare diagnostics, automated quality control in manufacturing, agricultural yield optimization, and environmental monitoring using AI-powered image processing. The hackathon provides high-quality datasets, cloud computing resources, and technical support from AI mentors. Workshops cover topics like multi-view geometry, 3D scene reconstruction, and explainable AI in vision applications. The event brings together AI enthusiasts from all over the world, creating a diverse and dynamic innovation hub. Finalists get the opportunity to present their solutions to an esteemed panel of AI experts, venture capitalists, and tech industry leaders. The best projects are rewarded with research grants, direct mentorship, and possible investment opportunities for startup acceleration. Attending this hackathon is a transformative experience for those looking to make a real impact in the AI and computer vision domain.",
      website: "https://visionaihack.com"
    },
    {
      id: "hack105",
      name: "AI4Good Vision Hack",
      location: "Toronto, Canada",
      date: "2025-03-22",
      description:
        "AI4Good Vision Hack is a mission-driven AI hackathon that leverages computer vision for addressing critical social and humanitarian challenges. This event is focused on developing AI-powered solutions for applications such as disaster response, assisting visually impaired individuals, smart urban planning, and wildlife conservation through automated monitoring. Participants work on cutting-edge deep learning techniques, including instance segmentation, semantic scene understanding, and AI-driven predictive analytics for social good. The hackathon provides mentorship from experts in AI ethics, public policy, and social impact technology, ensuring that the developed solutions align with ethical AI principles. Teams are encouraged to integrate domain knowledge from healthcare, sustainability, and accessibility fields to create impactful AI solutions. The best projects gain global recognition, receive funding for further development, and are offered opportunities to collaborate with non-profit organizations and AI research institutes working towards a better future. AI4Good Vision Hack is the perfect platform for AI professionals passionate about making a meaningful difference with their technical expertise.",
      website: "https://ai4goodvisionhack.com"
    }
  ];

  export const competitions = [
    {
      id: "comp201",
      name: "Global AI Vision Championship",
      location: "New York, USA",
      date: "2024-08-30",
      description:
        "The Global AI Vision Championship is a high-profile competition aimed at fostering innovation in computer vision. Participants from around the world compete in developing cutting-edge AI models for tasks such as real-time object detection, facial recognition, autonomous driving, and industrial automation. The competition features multiple challenge tracks, including low-power AI for edge devices, adversarial robustness, and generative vision models. Teams are provided with high-quality datasets and computational resources to develop and optimize their models. The event also includes panel discussions with AI thought leaders on the latest advancements in deep learning and vision technologies. Winning teams receive substantial cash prizes, research grants, and exclusive internship opportunities at leading AI firms. This competition serves as a great platform for professionals and students alike to showcase their expertise in AI-driven vision systems.",
      website: "https://globalaivision.com"
    },
    {
      id: "comp202",
      name: "Autonomous Vision Challenge",
      location: "Tokyo, Japan",
      date: "2024-09-25",
      description:
        "The Autonomous Vision Challenge is an intense AI competition focused on developing state-of-the-art solutions for autonomous systems. Participants work on real-world scenarios, including self-driving car vision, drone navigation, and AI-assisted robotic perception. The challenge emphasizes advanced vision-based reinforcement learning, SLAM (Simultaneous Localization and Mapping), and multi-sensor fusion techniques. Competitors gain access to a highly realistic simulation environment and real-world datasets collected from autonomous vehicles and robotics labs. The event features expert-led workshops on topics such as computational efficiency in real-time vision systems, safety considerations in autonomous AI, and human-AI collaboration. Winning teams receive grants to further develop their AI solutions and gain industry exposure through media coverage and networking opportunities. This competition is ideal for researchers and engineers looking to push the boundaries of AI in autonomous applications.",
      website: "https://autonomousvisionchallenge.com"
    },
    {
      id: "comp203",
      name: "AI Medical Imaging Competition",
      location: "Boston, USA",
      date: "2024-10-15",
      description:
        "The AI Medical Imaging Competition is dedicated to revolutionizing healthcare through AI-powered image analysis. Participants compete to build the most accurate and efficient deep learning models for medical applications such as tumor detection, disease classification, radiology enhancement, and pathology analysis. The competition provides access to massive labeled datasets from medical institutions, along with computational resources for training deep neural networks. Judges include medical professionals, AI researchers, and industry experts who evaluate solutions based on performance, interpretability, and clinical impact. The event features keynote sessions on regulatory challenges, ethics in AI-powered diagnosis, and the future of AI in medicine. Winning teams receive funding to advance their research, collaboration opportunities with hospitals, and exposure to healthcare AI startups and investors. This competition is perfect for those passionate about using AI for medical advancements and life-saving innovations.",
      website: "https://aimedicalcompetition.com"
    },
    {
      id: "comp204",
      name: "AI4Earth Vision Competition",
      location: "Amsterdam, Netherlands",
      date: "2024-11-10",
      description:
        "AI4Earth Vision Competition is a global challenge that encourages AI-driven solutions for environmental conservation and sustainability. Participants tackle pressing issues such as climate monitoring, deforestation detection, wildlife tracking, and pollution analysis using advanced computer vision models. Teams work with geospatial imagery, satellite data, and AI-powered ecological monitoring systems to create impactful solutions. The event includes expert talks on AI for environmental science, data ethics, and policy-driven sustainability initiatives. The best projects are awarded funding to continue their development, with winning solutions being implemented in collaboration with environmental agencies and conservation organizations. The competition also offers networking opportunities with sustainability-focused AI researchers and NGOs. AI4Earth Vision Competition is the perfect platform for AI enthusiasts looking to make a difference in the fight against environmental degradation through cutting-edge technology.",
      website: "https://ai4earthvision.com"
    },
    {
      id: "comp205",
      name: "Generative Vision AI Challenge",
      location: "Paris, France",
      date: "2025-01-20",
      description:
        "The Generative Vision AI Challenge is an advanced AI competition dedicated to exploring the potential of generative models in computer vision. Participants work on state-of-the-art problems involving image synthesis, video frame prediction, AI-generated art, and data augmentation for deep learning. The competition encourages the use of generative adversarial networks (GANs), diffusion models, and transformer-based architectures to push the boundaries of visual AI. Attendees gain access to powerful cloud-based AI platforms and high-quality labeled datasets for model training. The event includes expert workshops on generative AI ethics, adversarial attacks on vision models, and multi-modal AI applications. Winning teams receive substantial prizes, potential funding for AI-driven creative projects, and exclusive partnerships with research labs and creative AI startups. This competition is ideal for those interested in the intersection of AI, art, and synthetic media generation.",
      website: "https://generativevisionchallenge.com"
    }
  ];
  
  export const aiEvents = [
    {
      "id": "event301",
      "name": "Global AI Vision Championship",
      "location": "New York, USA",
      "venue": "AI Innovation Center, NY",
      "date": "August 30, 2024",
      "duration": "3 days",
      "description": "The Global AI Vision Championship is the world's leading competition for researchers, engineers, and students specializing in computer vision. This event is dedicated to pushing the boundaries of AI-powered image processing, real-time object detection, and autonomous navigation. Participants will tackle industry-relevant challenges in fields such as medical imaging, automated surveillance, self-driving car vision systems, and smart city applications. The event will also host live hackathons, panel discussions with AI thought leaders, and exclusive networking sessions with top AI companies. A diverse lineup of speakers will share insights on the latest advancements in deep learning, generative models, and explainable AI in vision systems. With hands-on workshops, in-depth technical demonstrations, and an AI startup showcase, the event provides unparalleled learning and career opportunities. Attendees can also participate in an exhibition featuring cutting-edge AI tools, datasets, and hardware solutions from leading research institutions and tech firms. The championship fosters a collaborative environment, encouraging knowledge-sharing and cross-disciplinary innovation among academia and industry professionals. The event will culminate in a grand finale where the best teams will present their AI vision solutions to a panel of world-renowned experts, competing for cash prizes, research grants, and job offers from top AI companies.",
      "whenToAttend": "Annually in August, early registration opens six months in advance. Keynote sessions and competitions are scheduled across all three days, with workshops and networking events interspersed throughout. Virtual attendees can access livestreams, exclusive content, and AI coding challenges via the event’s digital platform.",
      "pastEvents": [
        { "year": 2023, "date": "August 25-27", "location": "San Francisco, USA", "attendees": 800 },
        { "year": 2022, "date": "August 20-22", "location": "Boston, USA", "attendees": 720 },
        { "year": 2021, "date": "August 18-20", "location": "Seattle, USA", "attendees": 650 },
        { "year": 2020, "date": "August 15-17", "location": "Virtual (COVID-19 Edition)", "attendees": 900 },
        { "year": 2019, "date": "August 12-14", "location": "Chicago, USA", "attendees": 600 }
      ],
      "upcomingEvents": [
        { "year": 2025, "date": "August 28-30", "location": "Los Angeles, USA" },
        { "year": 2026, "date": "August 27-29", "location": "Toronto, Canada" },
        { "year": 2027, "date": "August 26-28", "location": "London, UK" }
      ],
      "attendeesCount": 1520,
      "maxCapacity": 2000,
      "eventType": "Hybrid (In-Person + Virtual)",
      "registrationFees": {
        "students": "$50 (Early bird: $30)",
        "professionals": "$200 (Early bird: $150)",
        "VIP": "$500 (Includes premium networking access)"
      },
      "prizes": "Cash prizes exceeding $100,000, AI research grants, publication opportunities in top AI journals, direct job placements with elite AI firms, exclusive mentorship programs with AI pioneers, and access to a fully-funded AI startup incubation program.",
      "sponsors": [
        "Google AI", 
        "NVIDIA", 
        "MIT Media Lab", 
        "Microsoft AI Research", 
        "Tesla Vision Lab", 
        "OpenAI", 
        "DeepMind"
      ],
      "judgingCriteria": [
        "Model accuracy and efficiency",
        "Innovation in approach",
        "Real-world applicability",
        "Computational performance",
        "Scalability and robustness",
        "Explainability and fairness in AI decision-making",
        "Use of state-of-the-art AI methodologies"
      ],
      "speakers": [
        { "name": "Andrew Ng", "title": "AI Researcher, Stanford" },
        { "name": "Fei-Fei Li", "title": "Professor, Stanford AI Lab" },
        { "name": "Yann LeCun", "title": "Chief AI Scientist, Meta" },
        { "name": "Demis Hassabis", "title": "CEO, DeepMind" },
        { "name": "Jeff Dean", "title": "Chief of AI, Google" },
        { "name": "Kate Crawford", "title": "AI Ethics Researcher, Microsoft" },
        { "name": "Sebastian Thrun", "title": "Founder, Google X & Udacity" }
      ],
      "website": "https://globalaivision.com",
      "image": "/thumbnail.jpg",
      "contact": {
        "email": "info@globalaivision.com",
        "phone": "+1-555-1234-567",
        "support": "support@globalaivision.com",
        "social": {
          "twitter": "https://twitter.com/GlobalAIVision",
          "linkedin": "https://www.linkedin.com/company/global-ai-vision",
          "facebook": "https://www.facebook.com/GlobalAIVision"
        }
      }
    },    
    {
      "id": "event302",
      "name": "Autonomous Vision Challenge",
      "location": "Tokyo, Japan",
      "venue": "Tokyo AI Research Center",
      "date": "September 25, 2024",
      "duration": "5 days",
      "description": "The Autonomous Vision Challenge is a premier global competition dedicated to advancing AI-driven visual perception for autonomous systems. This event brings together top researchers, engineers, and students to tackle real-world challenges in self-driving technology, robotic vision, and smart city surveillance. Participants will develop and test real-time AI models for autonomous vehicles, industrial robots, and urban AI monitoring systems. The challenge includes multiple tracks such as real-time object detection, pedestrian safety analysis, sensor fusion for AVs, and drone-based navigation AI. Attendees can also participate in high-impact workshops, expert-led panel discussions, and an AI innovation showcase featuring cutting-edge autonomous technology. Industry giants and startup pioneers will present the latest advancements in reinforcement learning, neural network-based perception, and scalable robotic vision solutions. The event aims to foster interdisciplinary collaboration, bridging the gap between academia and industry to push the frontiers of AI-powered autonomy. Competitors will have access to state-of-the-art testing facilities and real-world datasets to develop solutions that can scale from research to deployment. The final competition will be judged by leading experts, and the best-performing teams will receive prestigious awards, funding opportunities, and career advancement prospects with top AI firms.",
      "whenToAttend": "Held every September, applications open in April. Participants should register early due to high demand. The event schedule includes technical workshops, keynote presentations, networking sessions, and hands-on AI development labs.",
      "pastEvents": [
        { "year": 2023, "date": "August 25-27", "location": "San Francisco, USA", "attendees": 800 },
        { "year": 2022, "date": "August 20-22", "location": "Boston, USA", "attendees": 720 },
        { "year": 2021, "date": "August 18-20", "location": "Seattle, USA", "attendees": 650 },
        { "year": 2020, "date": "August 15-17", "location": "Virtual (COVID-19 Edition)", "attendees": 900 },
        { "year": 2019, "date": "August 12-14", "location": "Chicago, USA", "attendees": 600 }
      ],
      "upcomingEvents": [
        { "year": 2025, "date": "September 28-30", "location": "London, UK" },
        { "year": 2026, "date": "September 26-29", "location": "Paris, France" },
        { "year": 2027, "date": "September 24-28", "location": "Toronto, Canada" }
      ],
      "attendeesCount": 1150,
      "maxCapacity": 1200,
      "eventType": "Physical Event",
      "registrationFees": {
        "students": "$80 (Early bird: $50)",
        "professionals": "$250 (Early bird: $200)",
        "startups": "$400 (Includes AI networking sessions)"
      },
      "prizes": "Winning teams receive up to $150,000, access to self-driving car testing facilities, research grants, and mentorship from AI pioneers. The top three teams will receive invitations to pitch their solutions to major autonomous vehicle companies and research institutions.",
      "sponsors": [
        "Tesla AI",
        "Waymo",
        "Toyota Research Institute",
        "NVIDIA AI",
        "Boston Dynamics",
        "Uber ATG",
        "MIT CSAIL"
      ],
      "judgingCriteria": [
        "Perception accuracy in dynamic environments",
        "Navigation efficiency in real-world conditions",
        "Computational speed and model optimization",
        "Scalability and robustness of AI solutions",
        "Integration of multi-sensor fusion techniques",
        "Safety and ethical considerations in AI decision-making"
      ],
      "speakers": [
        { "name": "Elon Musk", "title": "CEO, Tesla AI" },
        { "name": "Sebastian Thrun", "title": "Founder, Google’s Self-Driving Car Project" },
        { "name": "Raquel Urtasun", "title": "Founder, Waabi AI & Former Chief Scientist, Uber ATG" },
        { "name": "John Krafcik", "title": "Former CEO, Waymo" },
        { "name": "Jensen Huang", "title": "CEO, NVIDIA" },
        { "name": "Fei-Fei Li", "title": "Professor, Stanford AI Lab" },
        { "name": "Andrew Ng", "title": "Founder, DeepLearning.AI" }
      ],
      "website": "https://autonomousvisionchallenge.com",
      "image": "/thumbnail2.jpg",
      "contact": {
        "email": "support@autonomousvision.com",
        "phone": "+81-555-4321-678",
        "support": "helpdesk@autonomousvision.com",
        "social": {
          "twitter": "https://twitter.com/AutoVisionAI",
          "linkedin": "https://www.linkedin.com/company/autonomous-vision-challenge",
          "facebook": "https://www.facebook.com/AutoVisionAI"
        }
      }
    },    
    {
      "id": "event303",
      "name": "AI4Earth Vision Competition",
      "location": "Amsterdam, Netherlands",
      "venue": "European AI & Sustainability Hub",
      "date": "November 10, 2024",
      "duration": "4 days",
      "description": "AI4Earth focuses on leveraging AI to tackle climate change, wildlife conservation, and sustainability challenges. The competition brings together AI researchers, environmentalists, and data scientists to develop machine learning solutions that analyze geospatial datasets, satellite imagery, and real-time climate data. Participants will work on projects that detect deforestation, monitor biodiversity, track pollution levels, and predict climate anomalies. The event features hands-on workshops, expert panels on AI ethics in sustainability, and networking opportunities with NGOs and environmental agencies. Finalists will showcase their solutions to industry leaders, policymakers, and investors.",
      "whenToAttend": "Happens annually in November, with project submissions due by August. Early registration is recommended for those seeking mentorship opportunities.",
      "pastEvents": [
        { "year": 2023, "date": "November 5-9", "location": "Oslo, Norway", "attendees": 450 },
        { "year": 2022, "date": "November 1-5", "location": "Stockholm, Sweden", "attendees": 400 },
        { "year": 2021, "date": "November 3-7", "location": "Helsinki, Finland", "attendees": 350 }
      ],
      "upcomingEvents": [
        { "year": 2025, "date": "November 12-16", "location": "Copenhagen, Denmark" },
        { "year": 2026, "date": "November 14-18", "location": "Berlin, Germany" }
      ],
      "attendeesCount": 850,
      "maxCapacity": 900,
      "eventType": "Hybrid (Virtual & In-Person)",
      "registrationFees": {
        "students": "$30 (Early bird: $20)",
        "professionals": "$150 (Early bird: $120)",
        "NGOs": "Free (requires application approval)"
      },
      "prizes": "Top teams receive up to $100,000 in funding for AI-driven environmental projects, research grants, and collaboration opportunities with global NGOs. The winners will also gain access to satellite data APIs, cloud computing resources, and incubation support to scale their solutions.",
      "sponsors": [
        "NASA Earth Science",
        "Microsoft AI for Earth",
        "World Wildlife Fund (WWF)",
        "European Space Agency",
        "Google Earth Engine"
      ],
      "judgingCriteria": [
        "Impact on sustainability and climate action",
        "Accuracy and reliability in environmental data analysis",
        "Scalability and feasibility of the solution",
        "Use of AI for social good and ethical considerations",
        "Innovative approach to environmental challenges"
      ],
      "speakers": [
        { "name": "Yann LeCun", "title": "Chief AI Scientist, Meta" },
        { "name": "Kate Crawford", "title": "AI & Ethics Researcher, NYU" },
        { "name": "Fei-Fei Li", "title": "Professor, Stanford AI Lab" },
        { "name": "Andrew Ng", "title": "Founder, DeepLearning.AI" },
        { "name": "Jeffrey Dean", "title": "Senior Fellow, Google Research" },
        { "name": "Jane Goodall", "title": "Founder, Jane Goodall Institute & Conservationist" }
      ],
      "website": "https://ai4earthvision.com",
      "image": "/thumbnail3.jpg",
      "contact": {
        "email": "contact@ai4earthvision.com",
        "phone": "+31-555-9876-543",
        "support": "support@ai4earthvision.com",
        "social": {
          "twitter": "https://twitter.com/AI4Earth",
          "linkedin": "https://www.linkedin.com/company/ai4earthvision",
          "facebook": "https://www.facebook.com/AI4Earth"
        }
      }
    }
  ];
  
  export const blogPosts = [
    {
      id: "blog101",
      title: "How AI is Transforming Computer Vision",
      author: "Dr. Fei-Fei Li",
      date: "March 15, 2024",
      category: "Artificial Intelligence",
      excerpt:
        "Computer Vision has evolved significantly with AI, enabling real-time object detection, facial recognition, and autonomous navigation...",
      content:
        "Artificial Intelligence has revolutionized the field of Computer Vision, allowing machines to interpret images and videos with human-like precision. The rise of deep learning models like CNNs and transformers has led to significant advancements in applications such as medical imaging, self-driving cars, and surveillance systems...",
      tags: ["AI", "Computer Vision", "Deep Learning"],
      readingTime: "7 min",
      image: "https://example.com/images/ai-computer-vision.jpg",
      views: 5400,
      likes: 320,
      comments: 15
    },
    {
      id: "blog102",
      title: "The Rise of Generative AI in Image Synthesis",
      author: "Yann LeCun",
      date: "April 2, 2024",
      category: "Generative AI",
      excerpt:
        "Generative AI models like Stable Diffusion and GANs are changing how we create digital art, deepfakes, and synthetic media...",
      content:
        "Generative AI has opened new doors in digital creativity. From AI-generated paintings to realistic deepfakes, models like GANs and diffusion models have redefined content creation. However, the ethical implications of synthetic media remain a major challenge...",
      tags: ["Generative AI", "GANs", "AI Ethics"],
      readingTime: "8 min",
      image: "https://example.com/images/generative-ai.jpg",
      views: 6700,
      likes: 410,
      comments: 25
    },
    {
      id: "blog103",
      title: "Top 5 AI-Powered Tools for Image Recognition",
      author: "Andrew Ng",
      date: "May 10, 2024",
      category: "AI Tools",
      excerpt:
        "AI-powered tools like OpenCV, Google Vision, and TensorFlow are leading the way in image recognition tasks...",
      content:
        "With the advancements in deep learning, AI-powered tools have become essential for image recognition tasks. OpenCV remains a go-to library, while TensorFlow and PyTorch provide powerful frameworks for building custom models...",
      tags: ["AI Tools", "Image Recognition", "Machine Learning"],
      readingTime: "6 min",
      image: "https://example.com/images/ai-tools.jpg",
      views: 4800,
      likes: 290,
      comments: 12
    },
    {
      id: "blog104",
      title: "Building an AI-Based Face Recognition System",
      author: "Geoffrey Hinton",
      date: "June 5, 2024",
      category: "Face Recognition",
      excerpt:
        "Face recognition systems powered by AI are now used in security, payments, and even social media applications...",
      content:
        "The rapid growth of AI-driven face recognition systems has raised both security concerns and privacy debates. From Apple's Face ID to biometric authentication in banking, deep learning algorithms have enabled unparalleled accuracy in facial identification...",
      tags: ["Face Recognition", "AI Security", "Deep Learning"],
      readingTime: "9 min",
      image: "https://example.com/images/face-recognition.jpg",
      views: 7300,
      likes: 500,
      comments: 35
    },
    {
      id: "blog105",
      title: "Exploring the Future of AI in Medical Imaging",
      author: "Lex Fridman",
      date: "July 20, 2024",
      category: "AI in Healthcare",
      excerpt:
        "AI is playing a crucial role in medical diagnostics, from detecting diseases in X-rays to predicting patient health outcomes...",
      content:
        "AI in medical imaging has enabled faster and more accurate diagnoses. Deep learning algorithms now assist radiologists in detecting cancer, fractures, and other abnormalities in medical scans. However, regulatory and ethical concerns still pose challenges...",
      tags: ["Medical AI", "Healthcare", "Deep Learning"],
      readingTime: "10 min",
      image: "https://example.com/images/medical-ai.jpg",
      views: 6100,
      likes: 370,
      comments: 20
    },
    {
      id: "blog106",
      title: "AI in Robotics: Enhancing Perception and Control",
      author: "Elon Musk",
      date: "August 8, 2024",
      category: "AI in Robotics",
      excerpt:
        "Robots are now equipped with AI-driven perception, enabling them to interact with their environments more intelligently...",
      content:
        "Advancements in AI have significantly improved robotic perception and control. With the integration of deep learning, reinforcement learning, and real-time computer vision, robots can now perform tasks that were once impossible, such as warehouse automation, autonomous drone navigation, and robotic surgery...",
      tags: ["AI in Robotics", "Automation", "Perception"],
      readingTime: "8 min",
      image: "https://example.com/images/robotics-ai.jpg",
      views: 8200,
      likes: 610,
      comments: 42
    }
  ];
  
  export const userProfiles = [
    {
      name: "Alex Smith ASMobbin",
      pronouns: "He/Him",
      activeStatus: "Active today",
      experience: "3 years",
      location: "San Francisco, California",
      remoteStatus: "Open to remote",
      lookingFor: "I enjoy challenging roles that allow me to grow my skills...",
      experienceDetails: [
        { title: "UI/UX Designer", company: "asmobbin", duration: "Jan 2020 - Present (4 years 8 months)" },
        { title: "Freelance Designer", company: "Self Employed", duration: "Jan 2019 - Jan 2020 (1 year 1 month)" }
      ],
      education: { degree: "BA, Design & Visual Communications", institution: "UC Berkeley", graduationYear: 2019 },
      skills: ["UX Design", "Figma", "Mobile App Design", "Wireframing", "InVision Prototyping"],
      idealNextOpportunity: { role: "Product Designer", salary: "$70,000", workType: "Onsite or Remote", location: "San Francisco" },
      actions: { share: true, notInterested: true, requestToChat: true }
    },
    {
      name: "Jordan Lee",
      pronouns: "They/Them",
      activeStatus: "Active yesterday",
      experience: "5 years",
      location: "New York, NY",
      remoteStatus: "Open to hybrid",
      lookingFor: "Seeking a leadership role in UX strategy...",
      experienceDetails: [
        { title: "Senior UX Designer", company: "TechCorp", duration: "Mar 2019 - Present (5 years 6 months)" },
        { title: "UX Researcher", company: "Freelance", duration: "Jan 2017 - Mar 2019 (2 years 2 months)" }
      ],
      education: { degree: "MS, Human-Computer Interaction", institution: "NYU", graduationYear: 2017 },
      skills: ["UX Strategy", "User Research", "Prototyping", "Adobe XD", "Figma"],
      idealNextOpportunity: { role: "Lead UX Designer", salary: "$90,000", workType: "Remote", location: "Anywhere" },
      actions: { share: true, notInterested: false, requestToChat: true }
    },
    {
      name: "Emily Carter",
      pronouns: "She/Her",
      activeStatus: "Active now",
      experience: "6 years",
      location: "Austin, Texas",
      remoteStatus: "Open to remote",
      lookingFor: "Excited about opportunities in interactive design...",
      experienceDetails: [
        { title: "Interaction Designer", company: "Creative Studios", duration: "May 2018 - Present (6 years 4 months)" },
        { title: "Visual Designer", company: "DesignWorks", duration: "Feb 2016 - Apr 2018 (2 years 2 months)" }
      ],
      education: { degree: "BFA, Graphic Design", institution: "University of Texas", graduationYear: 2015 },
      skills: ["UI Design", "Illustrator", "Sketch", "Prototyping", "Animation"],
      idealNextOpportunity: { role: "Senior UI Designer", salary: "$85,000", workType: "Remote", location: "Anywhere" },
      actions: { share: true, notInterested: false, requestToChat: true }
    },
    {
      name: "Michael Johnson",
      pronouns: "He/Him",
      activeStatus: "Recently active",
      experience: "4 years",
      location: "Seattle, WA",
      remoteStatus: "Open to remote",
      lookingFor: "Looking to contribute to a fast-paced startup...",
      experienceDetails: [
        { title: "Product Designer", company: "InnoTech", duration: "Jan 2021 - Present (3 years 8 months)" },
        { title: "UX Consultant", company: "Freelance", duration: "Mar 2019 - Dec 2020 (1 year 9 months)" }
      ],
      education: { degree: "BS, Computer Science", institution: "University of Washington", graduationYear: 2018 },
      skills: ["Design Thinking", "User Research", "Figma", "Adobe XD"],
      idealNextOpportunity: { role: "Lead Product Designer", salary: "$100,000", workType: "Hybrid", location: "Seattle" },
      actions: { share: true, notInterested: true, requestToChat: true }
    },
    {
      name: "Samantha Green",
      pronouns: "She/Her",
      activeStatus: "Active now",
      experience: "7 years",
      location: "Chicago, IL",
      remoteStatus: "Open to remote",
      lookingFor: "Seeking a senior role in product design...",
      experienceDetails: [
        { title: "Senior Product Designer", company: "TechGlobal", duration: "Jul 2016 - Present (7 years 2 months)" }
      ],
      education: { degree: "BFA, Industrial Design", institution: "School of the Art Institute of Chicago", graduationYear: 2014 },
      skills: ["Product Design", "Figma", "User Research", "Design Systems"],
      idealNextOpportunity: { role: "Principal Designer", salary: "$120,000", workType: "Remote", location: "Anywhere" },
      actions: { share: true, notInterested: false, requestToChat: true }
    },
    {
      name: "David Kim",
      pronouns: "He/Him",
      activeStatus: "Active today",
      experience: "8 years",
      location: "Los Angeles, CA",
      remoteStatus: "Open to hybrid",
      lookingFor: "Excited to bring innovation to digital experiences...",
      experienceDetails: [
        { title: "UX Lead", company: "MediaCorp", duration: "Feb 2015 - Present (8 years 6 months)" }
      ],
      education: { degree: "BA, Digital Arts", institution: "UCLA", graduationYear: 2012 },
      skills: ["UX Design", "Usability Testing", "Sketch", "Figma"],
      idealNextOpportunity: { role: "Head of UX", salary: "$150,000", workType: "Hybrid", location: "Los Angeles" },
      actions: { share: true, notInterested: false, requestToChat: true }
    },
    {
      name: "Isabella Martinez",
      pronouns: "She/Her",
      activeStatus: "Active yesterday",
      experience: "2 years",
      location: "Denver, CO",
      remoteStatus: "Open to remote",
      lookingFor: "Looking to join a growing startup...",
      experienceDetails: [
        { title: "Junior UX Designer", company: "StartUpX", duration: "Aug 2021 - Present (2 years 1 month)" }
      ],
      education: { degree: "BS, Interaction Design", institution: "Colorado State University", graduationYear: 2021 },
      skills: ["UX Research", "Wireframing", "Figma", "Usability Testing"],
      idealNextOpportunity: { role: "Mid-level UX Designer", salary: "$65,000", workType: "Remote", location: "Anywhere" },
      actions: { share: true, notInterested: false, requestToChat: true }
    }
  ];
  