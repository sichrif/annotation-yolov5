import { LabelType } from '../enums/LabelType';
import { ProjectType } from '../enums/ProjectType';

export interface ILabelToolkit {
    labelType: LabelType;
    headerText: string;
    imageSrc: string;
    imageAlt: string;
    projectType: ProjectType;
}

export const LabelToolkitData: ILabelToolkit[] = [

    {
        labelType: LabelType.RECT,
        headerText: 'Rect',
        imageSrc: 'ico/rectangle.png',
        imageAlt: 'rectangle',
        projectType: ProjectType.OBJECT_DETECTION,
    }
];