import React, { PropsWithChildren } from 'react';
import './ImagesDropZone.scss';
import { useDropzone, DropzoneOptions } from 'react-dropzone';
import { TextButton } from '../../Common/TextButton/TextButton';
import { ImageData } from '../../../store/labels/types';
import { connect } from 'react-redux';
import { addImageData, updateActiveImageIndex } from '../../../store/labels/actionCreators';
import { AppState } from '../../../store';
import { ProjectType } from '../../../data/enums/ProjectType';
import { PopupWindowType } from '../../../data/enums/PopupWindowType';
import { updateActivePopupType, updateProjectData } from '../../../store/general/actionCreators';
import { ProjectData } from '../../../store/general/types';
import { ImageDataUtil } from '../../../utils/ImageDataUtil';
import { sortBy } from 'lodash';

interface IProps {
    updateActiveImageIndexAction: (activeImageIndex: number) => any;
    addImageDataAction: (imageData: ImageData[]) => any;
    updateProjectDataAction: (projectData: ProjectData) => any;
    updateActivePopupTypeAction: (activePopupType: PopupWindowType) => any;
    projectData: ProjectData;
}

const ImagesDropZone: React.FC<IProps> = (props: PropsWithChildren<IProps>) => {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': ['.jpeg', '.png']
        }
    } as DropzoneOptions);

    const startEditor = (projectType: ProjectType) => {
        if (acceptedFiles.length > 0) {
            const files = sortBy(acceptedFiles, (item: File) => item.name)
            props.updateProjectDataAction({
                ...props.projectData,
                type: projectType
            });
            props.updateActiveImageIndexAction(0);
            props.addImageDataAction(files.map((file: File) => ImageDataUtil
                .createImageDataFromFileData(file)));
            props.updateActivePopupTypeAction(PopupWindowType.INSERT_LABEL_NAMES);
        }
    };
    const getDropZoneContent = () => {
        const inputProps = getInputProps();

        if (acceptedFiles.length === 0) {
            return (
                <>
                    <input {...inputProps} />
                    <img
                        draggable={false}
                        alt="upload"
                        src="ico/box-opened.png"
                    />
                    <p className="extraBold">Drop images</p>
                    <p>or</p>
                    <p className="extraBold">Click here to select them</p>
                </>
            );
        }

        return (
            <>
                <img
                    draggable={false}
                    alt="uploaded"
                    src="ico/box-closed.png"
                />
                <p className="extraBold">
                    {acceptedFiles.length} image{acceptedFiles.length > 1 ? 's' : ''} loaded
                </p>
                {acceptedFiles.length < 2 && (
                    <input {...inputProps} />
                )}
            </>
        );
    };


    const startEditorWithObjectDetection = () => startEditor(ProjectType.OBJECT_DETECTION)

    return (
        <div className='ImagesDropZone'>
            <div {...getRootProps({ className: 'DropZone' })}>
                {getDropZoneContent()}
            </div>
            <div className='DropZoneButtons'>
                <TextButton
                    label={'Start Annotation'}
                    isDisabled={!acceptedFiles.length}
                    onClick={startEditorWithObjectDetection}
                />

            </div>
        </div>
    )
};

const mapDispatchToProps = {
    updateActiveImageIndexAction: updateActiveImageIndex,
    addImageDataAction: addImageData,
    updateProjectDataAction: updateProjectData,
    updateActivePopupTypeAction: updateActivePopupType
};

const mapStateToProps = (state: AppState) => ({
    projectData: state.general.projectData
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImagesDropZone);
