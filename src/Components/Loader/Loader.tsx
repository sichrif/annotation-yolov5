import { useEffect } from "react";
import gsap from "gsap";

const Loader = () => {

    useEffect(() => {
        const load = gsap.timeline({ paused: true });

        load.to("#percent , #bar", {
            duration: 0.2,
            opacity: 0,
            zIndex: -1,
        });

        load.to(".progress", {
            duration: 0.8,
            width: "0%",
        });

        load.from(".content", {
            duration: 0.8,
            opacity: 0,
            ease: "Power4.out",
        }, "-=.5");

        load.from(
            ".content h1",
            {
                duration: 0.5,
                y: 50,
                skewY: 10,
                opacity: 0,
            },
            "-=1"
        );

        let id, width = 1;

        function loading() {
            id = setInterval(frame, 25);
        }

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                load.play();
            } else {
                width++;
                document.getElementById("barconfirm").style.width = width + "%";
                document.getElementById("percent").innerHTML = width + "%";
            }
        }

        loading();

    }, []);

    return (
        <div>
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100vh", zIndex: 50, background: "#f5e0bb" }}>
                <div className="progress" style={{ position: "relative", height: "100vh" }}>
                    <div id="bar" style={{ position: "absolute", top: 0, left: 0, height: "100vh", width: "100%" }}>
                        <div id="barconfirm" style={{ width: "0%", height: "100vh", background: "#1b1b1b" }}>0%</div>
                    </div>
                    <div id="percent" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", width: "100%", color: "white", fontSize: "150px", fontWeight: "lighter", fontStyle: "italic", mixBlendMode: "difference" }}></div>
                </div>
            </div>
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100vh" }}>
                <div className="content" style={{ position: "absolute", display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh", background: "#1b1b1b", flexDirection: "column", color: "white", overflow: "hidden", zIndex: 50 }}>
                    <h1>Taimoor Shahzada</h1>
                </div>
            </div>
        </div>
    );
};

export default Loader;
