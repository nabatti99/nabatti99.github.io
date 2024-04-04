import { randomImgUrl } from "../utilities/text.util";

export enum ProjectFilterCategory {
    ALL = "project_all",
    PERSONAL = "project_personal",
    PASSGENIX_SOLUTIONS = "project_passgenix_solutions",
    NAPA_GLOBAL = "project_napa_global",
}

export type Project = {
    name: string;
    filterCategories: ProjectFilterCategory[];
    description: string;
    thumbnail: string;
    category: string;
    techStacks: string[];
    slug: string;
    date: string;
    imageUrl?: string;
    website?: string;
    github?: string;
    youtube?: string;
};

export const projects: Project[] = [
    {
        name: "Team project: Ancv - WREF",
        filterCategories: [ProjectFilterCategory.ALL, ProjectFilterCategory.PERSONAL],
        description: "An agricultural mobile application ecosystem that provides free mobile applications to farmers as well as the agricultural service industry in Vietnam.",
        thumbnail: "/img/projects/ancv-wref/thumbnail.jpg",
        category: "Co-Founder, Mobile developer, AI developer",
        techStacks: ["Java", "Kotlin (Mobile)", "TensorFlow + Keras (LSTM, CNN)", "Open Weather (Weather Realtime Database)", "NodeJS (BE)", "MongoDB"],
        slug: "ancv-wref",
        date: "Jun.2019 – Mar.2022",
        github: "https://github.com/nmthangdn2000/AnCv_SF_UH21",
        youtube: "https://www.youtube.com/embed/zXK2wpIHI8c?si=k58zhu1AhBI3kdvv",
    },
    {
        name: "Drought Prediction Application",
        filterCategories: [ProjectFilterCategory.ALL, ProjectFilterCategory.PERSONAL],
        description: "Research and build a mobile application to solve the drought problem in agricultural field.",
        thumbnail: "/img/projects/drought-prediction-application/thumbnail.jpg",
        category: "Mobile developer, AI developer",
        techStacks: ["React Native (Mobile)", "Open Weather (Weather Realtime Database)", "TensorFlow + Keras (LSTM, CNN)", "NodeJS (BE)", "MongoDB"],
        slug: "drought-prediction-application",
        date: "Mar.2022 – Jun.2022",
        youtube: "https://www.youtube.com/embed/g4Lg2CxrGIw?si=f2GN3CRgd8wFP7p0",
    },
    {
        name: "Flood Detection Application",
        filterCategories: [ProjectFilterCategory.ALL, ProjectFilterCategory.PERSONAL],
        description: "Research and build a mobile application to solve the flood problem in city area.",
        thumbnail: "/img/projects/flood-detection-application/thumbnail.jpg",
        category: "Mobile developer, AI developer",
        techStacks: ["React Native (Mobile)", "Google Earth Engine (Remote Sensing Realtime Database)", "NodeJS (BE)", "MongoDB"],
        slug: "flood-detection-application",
        date: "Mar.2022 – Jun.2022",
        github: "https://github.com/nabatti99/CanhBaoNgapLut",
        website: "https://dut.udn.vn/wref/gioithieu/id/3791",
        youtube: "https://www.youtube.com/embed/9uAIwCMSsmM?si=hgeuzWUCFTL8h5_y",
    },
    {
        name: "Capstone Project: HomeLab.ai",
        filterCategories: [ProjectFilterCategory.ALL, ProjectFilterCategory.PERSONAL],
        description: "A web application that help designers reduce time when prepare an idea and make an architecture design for their customer.",
        thumbnail: "/img/projects/homelab-ai/thumbnail.jpg",
        category: "Front-end developer, AI developer, Blockchain developer",
        techStacks: ["ReactJS (Web)", "TensorFlow", "Matlab", "Pytorch", "Hybrid AI Prediction Model", "Solidity (Blockchain)", "Coohom (3D Platform)"],
        slug: "homelab-ai",
        date: "Apr.2022 – Mar.2023",
        github: "https://github.com/PassgenixTeam/home-lab-ai",
        youtube: "https://www.youtube.com/embed/nL43ijikK8M?si=W-d5Y2BtMeYMQLvM",
    },
    {
        name: "Napa Global: SoulBound NFT",
        filterCategories: [ProjectFilterCategory.ALL, ProjectFilterCategory.NAPA_GLOBAL],
        description: "NFT Web-app rewarding for contributor who devoted to a project.",
        category: "Blockchain Developer, Web Developer, BE Developer, Maintainer",
        thumbnail: "/img/projects/napa-soulbound-nft/thumbnail.jpg",
        techStacks: ["Solidity (Blockchain)", "ReactJS (Web)", "NestJS (BE)", "MySQL", "MongoDB", "Docker", "AWS (EC2, S3)", "CI/CD"],
        slug: "napa-soulbound-nft",
        imageUrl: "/img/projects/napa-soulbound-nft/image.jpg",
        date: "Jun.2022 – Apr.2023",
        website: "https://opensoul.io",
    },
    {
        name: "Napa Global: Face Recognition",
        filterCategories: [ProjectFilterCategory.ALL, ProjectFilterCategory.NAPA_GLOBAL],
        description: "The internal face recognition system for Napa Global company.",
        thumbnail: "/img/projects/napa-face-recognition/thumbnail.jpg",
        category: "Python Developer, AI Developer",
        techStacks: ["OpenCV", "Dlib", "Python", "MediaPipe"],
        slug: "napa-face-recognition",
        imageUrl: "/img/projects/napa-face-recognition/image.jpg",
        date: "Mar.2024 – Present",
    },
    {
        name: "Napa Global: Gamify",
        filterCategories: [ProjectFilterCategory.ALL, ProjectFilterCategory.NAPA_GLOBAL],
        description: "A blockchain platform for gamer.",
        thumbnail: "/img/projects/napa-gamify/thumbnail.jpg",
        category: "Blockchain developer, Supporter",
        techStacks: ["Solidity (Blockchain)"],
        slug: "napa-gamify",
        imageUrl: "/img/projects/napa-gamify/image.jpg",
        date: "Aug.2022 – Nov.2022",
    },
    {
        name: "Passgenix Solutions: The Rike",
        filterCategories: [ProjectFilterCategory.ALL, ProjectFilterCategory.PASSGENIX_SOLUTIONS],
        description: "Bring products of Vietnamese farmers to the US market.",
        thumbnail: "/img/projects/passgenix-the-rike/thumbnail.jpg",
        category: "Technical leader",
        techStacks: ["NextJS (Client website)", "Shopify", "Amazon for Retailer (E-commerce platform)", "NestJS (BE)", "AppSheet (Admin)", "MongoDB"],
        slug: "passgenix-the-rike",
        date: "Feb.2023 – Present",
        imageUrl: "/img/projects/passgenix-the-rike/image.jpg",
        website: "https://www.therike.us",
    },
    {
        name: "Napa Global: Datasource",
        filterCategories: [ProjectFilterCategory.ALL, ProjectFilterCategory.NAPA_GLOBAL],
        description: "A blockchain-based hackathon platform.",
        thumbnail: "/img/projects/napa-datasource/thumbnail.jpg",
        category: "Database Analyst, BE Developer, Maintainer",
        techStacks: ["Solidity (Blockchain)", "Ruby (Web)", "MongoDB", "Flask (AI Server)"],
        slug: "napa-datasource",
        imageUrl: "/img/projects/napa-datasource/image.jpg",
        date: "Oct.2023 – Dec.2023",
        website: "https://datasource.ai",
    },
    {
        name: "Napa Global: MPC-CMP Wallet",
        filterCategories: [ProjectFilterCategory.ALL, ProjectFilterCategory.NAPA_GLOBAL],
        description: "Create a blockchain-base security wallet using MPC-CMP algorithm.",
        thumbnail: "/img/projects/napa-mpc-cmp-wallet/thumbnail.jpg",
        category: "C++ Developer, Blockchain Developer, BE Developer",
        techStacks: ["OpenSSL", "MPC-Lib Cosigner (C++)", "AWS (Nitro, KMS, DynamoDB, Cognito)", "NodeJS (BE Server)"],
        slug: "napa-mpc-cmp-wallet",
        imageUrl: "/img/projects/napa-mpc-cmp-wallet/image.jpg",
        date: "Nov.2023 – Mar.2024",
    },
];
