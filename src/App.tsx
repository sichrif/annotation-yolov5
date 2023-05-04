import React from 'react';
import './App.scss';
import EditorView from './views/EditorView/EditorView';
import MainView from './views/MainView/MainView';
import { ProjectType } from './data/enums/ProjectType';
import { AppState } from './store';
import { connect } from 'react-redux';
import PopupView from './views/PopupView/PopupView';
import MobileMainView from './views/MobileMainView/MobileMainView';
import { ISize } from './interfaces/ISize';
import { Settings } from './settings/Settings';
import { SizeItUpView } from './views/SizeItUpView/SizeItUpView';
import { PlatformModel } from './staticModels/PlatformModel';
import classNames from 'classnames';
import NotificationsView from './views/NotificationsView/NotificationsView';
import { RoboflowAPIDetails } from './store/ai/types';
import Home from './Components/Home/Home';
import { createBrowserRouter, Navigate, Route, RouterProvider } from 'react-router-dom';
import DetectDetails from './Components/DetectDetails/DetectDetails';
import Login from './Components/Login/Login';

interface IProps {
    projectType: ProjectType;
    windowSize: ISize;
    isObjectDetectorLoaded?: boolean;
    isPoseDetectionLoaded?: boolean;
    isYOLOV5ObjectDetectorLoaded: boolean;
    roboflowAPIDetails: RoboflowAPIDetails;
}


function PrivateRoute({ children, isAuth }) {

    if (isAuth) {
        // not logged in so redirect to login page with the return url
        return <Navigate to="/login" replace />
    }

    // authorized so return child components
    return children;
}



const App: React.FC<IProps> = (
    {
        projectType,
        windowSize,
        isObjectDetectorLoaded,
        isPoseDetectionLoaded,
        isYOLOV5ObjectDetectorLoaded,
        roboflowAPIDetails
    }
) => {
    const selectRoute = () => {
        if (!!PlatformModel.mobileDeviceData.manufacturer && !!PlatformModel.mobileDeviceData.os)
            return <MobileMainView />;
        if (!projectType) {
            return <MainView />;
        } else {
            if (windowSize.height < Settings.EDITOR_MIN_HEIGHT || windowSize.width < Settings.EDITOR_MIN_WIDTH) {
                return <SizeItUpView />;
            } else {
                return <EditorView />;
            }
        }
    };

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        }, {
            path: "/new-product",
            element: selectRoute(),
        },
        {
            path: "/product-details/:id",
            element: <PrivateRoute isAuth={true}>
                <DetectDetails />
            </PrivateRoute>,
        },
        {
            path: "/login",
            element: <Login />,
        }

    ]);

    const isAILoaded = isObjectDetectorLoaded
        || isPoseDetectionLoaded
        || isYOLOV5ObjectDetectorLoaded
        || (roboflowAPIDetails.model !== '' && roboflowAPIDetails.key !== '' && roboflowAPIDetails.status)

    return (
        <div className={classNames('App', { 'AI': isAILoaded })} draggable={false}>
            <RouterProvider router={router} />
            <PopupView />
            <NotificationsView />
        </div>
    );
};


const mapStateToProps = (state: AppState) => ({
    projectType: state.general.projectData.type,
    windowSize: state.general.windowSize,
    isSSDObjectDetectorLoaded: state.ai.isSSDObjectDetectorLoaded,
    isPoseDetectorLoaded: state.ai.isPoseDetectorLoaded,
    isYOLOV5ObjectDetectorLoaded: state.ai.isYOLOV5ObjectDetectorLoaded,
    roboflowAPIDetails: state.ai.roboflowAPIDetails
});

export default connect(
    mapStateToProps
)(App);
