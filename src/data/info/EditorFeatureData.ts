export interface IEditorFeature {
    displayText: string;
    imageSrc: string;
    imageAlt: string;
}

export const EditorFeatureData: IEditorFeature[] = [
    {
        displayText: 'Annotate images with bounding boxes, polygons, points and lines',
        imageSrc: 'ico/open-source.png',
        imageAlt: 'open-source',
    },
    {
        displayText: 'No advanced installation required, just open up your browser',
        imageSrc: 'ico/online.png',
        imageAlt: 'online',
    },
    {
        displayText: "Everything is secured in our database, you don't have to worry about losing your data",
        imageSrc: 'ico/private.png',
        imageAlt: 'private',
    },
    {
        displayText: 'Supports multiple products, each with its own set of images and annotations',
        imageSrc: 'ico/labels.png',
        imageAlt: 'labels',
    },
    {
        displayText: 'It automates production checks and helps you to find defects early in the process',
        imageSrc: 'ico/file.png',
        imageAlt: 'file',
    },
    {
        displayText: 'Use AI to make your work more productive',
        imageSrc: 'ico/robot.png',
        imageAlt: 'robot',
    },
];