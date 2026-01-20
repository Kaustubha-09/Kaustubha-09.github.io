const projects = [
  {
    title: "Semantic Diff Prompting for Video Understanding",
    description:
      "Prompt-level method for Vision–Language Models focusing on semantic changes between consecutive video frames.",
    highlights: [
      "56–68% reduction in redundant captions without fine-tuning",
      "Improved action-focused descriptions via semantic change detection",
      "Evaluated using token usage and lexical redundancy metrics",
    ],
    tags: ["Generative AI", "Vision-Language Models", "Prompt Engineering"],
  },
  {
    title: "YouDescribeX",
    description:
      "AI-powered accessibility platform for blind and low-vision users across web, iOS, and Android.",
    highlights: [
      "Agent-assisted prompting, ranking, and in-video Q&A",
      "Transitioned from research prototype to production system",
      "Used by 40+ blind and low-vision users",
    ],
    tags: ["Accessibility", "AI/ML", "Web", "Mobile"],
  },
  {
    title: "Echolin.AI — Deepfake Image Detection",
    description:
      "Deepfake detection system using CNNs and ensemble models with interpretability.",
    highlights: [
      "Open-sourced with 120+ GitHub stars",
      "Used Grad-CAM for interpretability",
      "Low-latency FastAPI inference pipeline",
    ],
    tags: ["Computer Vision", "Deep Learning", "FastAPI"],
  },
  {
    title: "RapidTriage AI",
    description:
      "Emergency care prioritization system using ML-based triage classification.",
    highlights: [
      "Improved macro-F1 by +0.12",
      "Applied calibration and bias-aware evaluation",
      "Selected as top demo-day project",
    ],
    tags: ["Machine Learning", "Healthcare", "Evaluation"],
  },
];

export default projects;