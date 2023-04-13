import { ILabelFormatData } from '../interfaces/ILabelFormatData';
import { LabelType } from './enums/LabelType';
import { AnnotationFormatType } from './enums/AnnotationFormatType';

export type ExportFormatDataMap = Record<LabelType, ILabelFormatData[]>;

export const ExportFormatData: ExportFormatDataMap = {
    [LabelType.RECT]: [
        {
            type: AnnotationFormatType.YOLO,
            label: 'A .zip package containing files in YOLO format.'
        }
    ]
}
