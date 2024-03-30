import * as React from "react";

const PageBody: React.FC<{
    children?: React.ReactNode;
}> = ({ children }) => {
    React.useEffect(() => {
        // Put custom scripts here
        const scriptInfos: Record<string, { path: string } & Record<string, any>> = {
            main_js: {
                path: "/assets/js/main.js",
            },
        };

        Object.keys(scriptInfos).forEach((key) => {
            const scriptInfo = scriptInfos[key];

            document.getElementById(key)?.remove();

            const script = document.createElement("script");
            script.id = key;
            script.src = scriptInfo.path;
            if (scriptInfo.type) script.type = scriptInfo.type;

            document.body.appendChild(script);
        });
    }, []);

    return (
        <div className="page-wrapper relative z-[1] bg-white">
            {/* <!--...::: Header Start :::... --> */}
            <header>Put your header HTML here</header>
            {/* <!--...::: Header End :::... --> */}

            <main className="main-wrapper relative overflow-hidden">{children}</main>

            {/* <!--...::: Footer Section Start :::... --> */}
            <footer>Put your footer HTML here</footer>
            {/* <!--...::: Footer Section End :::... --> */}
        </div>
    );
};

export default PageBody;
