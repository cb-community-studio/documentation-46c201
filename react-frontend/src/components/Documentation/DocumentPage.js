import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Accordion, AccordionTab } from 'primereact/accordion';
import CodeSnip from "./CodeSnip";


const DocumentPage = () => {

    useEffect(() => { }, []);

    const exampleCode = `feathers g service`;

    return (
        <div className="col-12">
            <div className="w-12 h-30rem flex align-items-center justify-content-center p-6" style={{ backgroundImage: "url('https://media.istockphoto.com/id/184958442/photo/crumpled-gray-paper-background.jpg?s=612x612&w=0&k=20&c=c5hnhFaL0WfvFToWDy3RYavKn-5h_sb_t9UmpNe8pnU=')" }}>
                <p className="text-900 text-7xl line-height-1 font-Bold">Welcome to CodeBridge Documentation</p>
            </div>
            <div style={{ height: "10px" }} />
            <div class="col-12">
                <Accordion multiple activeIndex={[0]}>
                    <AccordionTab header="How to create services using the Feathers CLI">
                        <div className="text-justify p-2">
                            <h4>{`Step 1:`} Open your VSC terminal and select the add sign (+) on the top right of the terminal.</h4>
                            <h4>{`Step 2:`} Once you click on the (+), you will have two choices of selection on the top , backend and frontend.</h4>
                            <h4>{`Step 3:`} Select the backend and type "feathers g service" Note:<span className="highlight-red"> g is defined as generate</span>.</h4>
                            <div className="col-7">
                                <CodeSnip code={exampleCode} />
                            </div>
                            <h4>Service will be construct based on these questions:</h4>
                            <Accordion activeIndex={0}>
                                <AccordionTab header="What kind of service is it?">
                                    <p className="text-justify p-2">
                                        Select Mongoose as the service.
                                        <br></br>
                                        <span className="highlight-red font-bold">Note: Mongoose works as the middle man in between the database and website. It also creates several layers.</span>
                                    </p>
                                </AccordionTab>
                                <AccordionTab header="What is the name of the service?">
                                    <p className="text-justify p-2">
                                        Provide the name of your service <br></br> (e.g., Customer Details).
                                    </p>
                                </AccordionTab>
                                <AccordionTab header="Which path should the service be registered on?">
                                    <p className="text-justify p-2">
                                        Provide the path name in order to access the service from different pages.<br></br>  (e.g: /customerDetails)
                                    </p>
                                </AccordionTab>
                            </Accordion>
                            <h4>Two type of folders will be created at the nodejs-backend:</h4>
                            <p className="custom-font-size">1. Service folder {`==>`} .class,.hooks, and.service files</p>
                            <p className="custom-font-size">2. Model folder   {`==>`} .model.js. The database schema function.</p>
                        </div>
                    </AccordionTab>
                    <AccordionTab header="How downgrade or change the node version using Command Line Interface (CLI)">
                        <div className="text-justify p-2">
                            <h4>{`Step 1:`} Open your VSC terminal and select the add sign (+) on the top right of the terminal.</h4>
                            <h4>{`Step 2:`} Once you click on the top, you will have two choices of selection: either backend or frontend.</h4>
                            <h4>{`Step 3:`} Select the backend option, and now type out "nvm list". This allows you to identify the number of NVM versions that your machine has.</h4>
                            <h4>{`Step 4:`} In the terminal, type "nvm use (the version you want)." </h4>
                            <p className="custom-font-size">An example : "nvm 18” which is my current version, in order to change the node version from React 18 to 16, I write the CLI "nvm use 16".</p>
                        </div>
                    </AccordionTab>
                    <AccordionTab header="How to install new version of Node.js">
                        <div className="text-justify p-2">
                            <h4>{`Step 1:`} Open your VSC terminal and select the add sign (+) on the top right of the terminal.</h4>
                            <h4>{`Step 2:`} Once you click on the top, you will have two choices of selection: either backend or frontend.</h4>
                            <h4>{`Step 3:`} 3.	Select the backend option, and now type out "nvm install 19". This is a direct installation of version 19 of Node. js</h4>
                        </div>
                    </AccordionTab>
                    <AccordionTab header="Issue during create service using feathers CLI (feathers g service)">
                        <div className="text-justify p-2">
                            <p className="custom-font-size">When you try to use from CLI
                                feathers generate service or feathers generate hook
                                it shows :</p>
                            <p className="custom-font-size font-bold">Error: Cannot run generator since the current folder does not appear to be a Feathers application.</p>
                            <p className="custom-font-size">Either your package.json is missing or it does not have `feathers` property.</p>
                            <h4>{`✔`} How to handle version conflict in between feathers and node.js</h4>
                            <p className="custom-font-size">Solved: It was a version problem.</p>
                            <h4>{`Step 1:`} uninstall feathers CLI</h4>
                            <p className="custom-font-size">npm uninstall @feathersjs/cli -g</p>
                            <h4>{`Step 2:`} install a specific version related to project</h4>
                            <p className="custom-font-size">npm uninstall @feathersjs/cli@4.7.0 -g</p>
                        </div>
                    </AccordionTab>
                    <AccordionTab header="How to active page connection through MyRouter">
                        <div className="text-justify p-2">
                            <h4>{`Step 1:`} </h4>
                            <p className="custom-font-size"></p>
                        </div>
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    );
};
const mapState = (state) => {
    //
    return {};
};
const mapDispatch = (dispatch) => ({
    //
});

export default connect(mapState, mapDispatch)(DocumentPage);