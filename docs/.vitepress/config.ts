import { DefaultTheme, defineConfig } from "vitepress";

export default defineConfig({
    base: "/learn-wgpu/",
    title: "Learn Wgpu",
    lastUpdated: true,

    themeConfig: {
        search: {
            provider: "local",
        },
        nav: [
            {
                text: "Guide",
                link: "/index.md",
                activeMatch: "^/(?!news)",
            },
            {
                text: "News",
                // Just grab the first one since there is no generic news page
                link: "/news/" + sidebarNews()[0].link!,
                activeMatch: "^/news",
            },
        ],

        sidebar: {
            "/news": {
                base: "/news/",
                items: sidebarNews(),
            },
            "/": [
                {
                    text: "Introduction",
                    link: "/index.md",
                    items: sidebarGuide(),
                },
            ],
        },
    },
});

function sidebarGuide(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "Beginner",
            base: "/beginner/",
            collapsed: false,
            items: [
                {
                    text: "Dependencies and the window",
                    link: "/tutorial1-window/index.md",
                },
                {
                    text: "The Surface",
                    link: "/tutorial2-surface/index.md",
                },
                {
                    text: "The Pipeline",
                    link: "/tutorial3-pipeline/index.md",
                },
                {
                    text: "Buffers and Indices",
                    link: "/tutorial4-buffer/index.md",
                },
                {
                    text: "Textures and bind groups",
                    link: "/tutorial5-textures/index.md",
                },
                {
                    text: "Uniform buffers and a 3d camera",
                    link: "/tutorial6-uniforms/index.md",
                },
                {
                    text: "Instancing",
                    link: "/tutorial7-instancing/index.md",
                },
                {
                    text: "The Depth Buffer",
                    link: "/tutorial8-depth/index.md",
                },
                {
                    text: "Model Loading",
                    link: "/tutorial9-models/index.md",
                },
            ],
        },
        {
            text: "Intermediate",
            base: "/intermediate/",
            collapsed: false,
            items: [
                {
                    text: "Working with Lights",
                    link: "/tutorial10-lighting/index.md",
                },
                {
                    text: "Normal Mapping",
                    link: "/tutorial11-normals/index.md",
                },
                {
                    text: "A Better Camera",
                    link: "/tutorial12-camera/index.md",
                },
                {
                    text: "High Dynamic Range Rendering",
                    link: "/tutorial13-hdr/index.md",
                },
            ],
        },
        {
            text: "Compute Pipelines",
            base: "/compute/",
            collapsed: true,
            items: [
                {
                    text: "Intro to Compute Pipelines",
                    link: "/introduction/index.md",
                },
                {
                    text: "Sorting on the GPU",
                    link: "/sorting/index.md",
                },
            ],
        },
        {
            text: "Showcase",
            base: "/showcase/",
            collapsed: true,
            items: [
                {
                    text: "Foreword",
                    link: "/index.md",
                },
                {
                    text: "Mipmapping",
                    link: "/mipmaps/index.md",
                },
                {
                    text: "Stencil Buffers",
                    link: "/stencil/index.md",
                },
                {
                    text: "Wgpu without a window",
                    link: "/windowless/index.md",
                },
                {
                    text: "Creating gifs",
                    link: "/gifs/index.md",
                },
                {
                    text: "Pong",
                    link: "/pong/index.md",
                },
                {
                    text: "Memory Layout in WGSL",
                    link: "/alignment/index.md",
                },
            ],
        },
    ];
}

function sidebarNews(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "28.0 and stencil",
            link: "/28.0/index.md",
        },
        {
            text: "27.0",
            link: "/27.0/index.md",
        },
        {
            text: "26.0.1 and compute pipelines",
            link: "/26.0.1/index.md",
        },
        {
            text: "Winit 0.30",
            link: "/update-to-winit-0.30/index.md",
        },
        {
            text: "25.0",
            link: "/25.0/index.md",
        },
        {
            text: "24.0",
            link: "/24.0/index.md",
        },
        {
            text: "22.0",
            link: "/22.0/index.md",
        },
        {
            text: "0.18 and HDR",
            link: "/0.18 and hdr/index.md",
        },
        {
            text: "0.17",
            link: "/0.17/index.md",
        },
        {
            text: "0.16",
            link: "/0.16/index.md",
        },
        {
            text: "0.15",
            link: "/0.15/index.md",
        },
        {
            text: "0.14",
            link: "/0.14/index.md",
        },
        {
            text: "0.13",
            link: "/0.13/index.md",
        },
        {
            text: "0.12",
            link: "/0.12/index.md",
        },
        {
            text: "Pre 0.12",
            link: "/pre-0.12/index.md",
        },
    ];
}
