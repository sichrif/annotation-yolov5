import React, { useState } from 'react';
import './ExportLabelPopup.scss';
import { AnnotationFormatType } from '../../../data/enums/AnnotationFormatType';
import { RectLabelsExporter } from '../../../logic/export/RectLabelsExporter';
import { LabelType } from '../../../data/enums/LabelType';
import { ILabelFormatData } from '../../../interfaces/ILabelFormatData';
import { PointLabelsExporter } from '../../../logic/export/PointLabelsExport';
import { PolygonLabelsExporter } from '../../../logic/export/polygon/PolygonLabelsExporter';
import { PopupActions } from '../../../logic/actions/PopupActions';
import { LineLabelsExporter } from '../../../logic/export/LineLabelExport';
import { TagLabelsExporter } from '../../../logic/export/TagLabelsExport';
import GenericLabelTypePopup from '../GenericLabelTypePopup/GenericLabelTypePopup';
import { ExportFormatData } from '../../../data/ExportFormatData';
import { AppState } from '../../../store';
import { connect } from 'react-redux';
import { TextField } from '@mui/material';

interface IProps {
    activeLabelType: LabelType,
}

const ExportLabelPopup: React.FC<IProps> = ({ activeLabelType }) => {
    const [labelType, setLabelType] = useState(activeLabelType);
    const [exportFormatType, setExportFormatType] = useState(null);
    const [deviceName, setDeviceName] = useState("");

    const onAccept = (type: LabelType) => {
        RectLabelsExporter.export(exportFormatType, deviceName)
        PopupActions.close();
    };

    const onReject = (type: LabelType) => {
        PopupActions.close();
    };

    const onSelect = (type: AnnotationFormatType) => {
        setExportFormatType(type);
    };

    const getOptions = (exportFormatData: ILabelFormatData[]) => {
        return exportFormatData.map((entry: ILabelFormatData) => {
            return <div
                className='OptionsItem'
                onClick={() => onSelect(entry.type)}
                key={entry.type}
            >
                {entry.type === exportFormatType ?
                    <img
                        draggable={false}
                        src={'ico/checkbox-checked.png'}
                        alt={'checked'}
                    /> :
                    <img
                        draggable={false}
                        src={'ico/checkbox-unchecked.png'}
                        alt={'unchecked'}
                    />}
                {entry.label}
            </div>;
        });
    };
    const renderInternalContent = (type: LabelType) => {
        return <>
            <div className='Message'>
                Select label type and the file format you would like to use to export labels.
            </div>,
            <div className='Options'>
                <div style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-evenly",
                }}>
                    <TextField sx={{ width: "40%" }} type='number' id="filled-basic" label="Number of Epochs" variant="filled" />
                    <TextField sx={{ width: "40%" }} value={deviceName} onChange={(e) => {
                        setDeviceName(e.target.value);
                    }} type='text' id="filled-basic" label="Device Name" variant="filled" />
                </div>
                {getOptions(ExportFormatData[type])}
            </div>
        </>;
    };

    const onLabelTypeChange = (type: LabelType) => {
        setLabelType(type);
        setExportFormatType(null);
    };

    return (
        <GenericLabelTypePopup
            activeLabelType={labelType}
            title={`Export ${labelType.toLowerCase()} annotations`}
            onLabelTypeChange={onLabelTypeChange}
            acceptLabel={'Start'}
            onAccept={onAccept}
            disableAcceptButton={!exportFormatType}
            rejectLabel={'Cancel'}
            onReject={onReject}
            renderInternalContent={renderInternalContent}
        />
    );
};

const mapDispatchToProps = {};

const mapStateToProps = (state: AppState) => ({
    activeLabelType: state.labels.activeLabelType,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExportLabelPopup);