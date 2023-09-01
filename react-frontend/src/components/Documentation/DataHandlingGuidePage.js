import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Card } from 'primereact/card';
import { Fieldset } from 'primereact/fieldset';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';



const ComponentString = () => {
        const data = [
            { type: 'Text', description: 'Text is a collection of characters that form words, sentences, or paragraphs.' },
            { type: 'Input', description: 'An input refers to data or information that is provided to a system, program, or process. It can come from various sources, such as users, sensors, files, or other software components.' },
            { type: 'Icon', description: 'An icon is a visual representation or symbol that represents an object, action, concept, or idea. Icons are used to convey information quickly and intuitively, often serving as shortcuts or visual cues in user interfaces.' },
            { type: 'Image', description: 'Images can convey information, tell stories, or evoke emotions through visual content. They are widely used in various forms of media, including websites, documents, presentations, and art. In digital contexts, images are stored as files containing pixel data, colors, and shapes that create a visual representation when displayed on screens or printed.'  },
            { type: 'Avatar', description: 'Avatar is a representation of people using icons, labels, and images.' },
            { type: 'Chip', description: 'A chip component is typically a small, rounded element that displays a piece of information, often in a visually appealing and compact manner. Chips are commonly used to represent items such as tags, labels, or categories. They can contain text, icons, or both.' },
            { type: 'Tag', description: 'Tags are used to categorize or label content for easy organization and retrieval. On blogging platforms and content management systems, users often add tags to their posts or articles to make it easier for readers to find related content.' },
            // ... other data objects
        ];
    
        return (
            <div>
                <DataTable value={data} stripedRows >
                    <Column field="type" header="Type of Component" />
                    <Column field="description" header="Description" />
                    <Column field="example" header="Example" />
                </DataTable>
            </div>
        );
    };

const ComponentBoolean = () => {
        const data = [
            { type: 'Text', description: 'Text is a collection of characters that form words, sentences, or paragraphs.' },
            { type: 'Tick', description: 'A tick can refer to a checkmark (√), a symbol used to indicate that something is correct or completed.' },
            { type: 'CheckBox', description: 'A checkbox is a user interface element that allows users to select or deselect an option. It typically appears as a small square box that can be checked (marked) or left unchecked (empty). Checkboxes are often used to represent binary choices, where a user can choose between two distinct states, such as true or false.' },
            { type: 'Switch', description: 'A "switch" is a user interface component that provides a way to toggle between two states, typically an "on" state and an "off" state.'  },
            // ... other data objects
        ];
    
        return (
            <div>
                <DataTable value={data} stripedRows >
                    <Column field="type" header="Type of Component" />
                    <Column field="description" header="Description" />
                    <Column field="example" header="Example" />
                </DataTable>
            </div>
        );
    };
    
    
const DataHandlingGuidePage = () => {

    useEffect(() => { }, []);

    return (
        <div className="card">
            <Accordion multiple activeIndex={[0]}>
                <AccordionTab header="Description about service details">
                    <Card title="Service Name">
                        <p className="m-0">
                            serviceName is defined as the name of the service created. This service name will be used as a reference in the backend in order to create the .class, .hooks, and .service files.
                            For example, product is the created service name; therefore, in the backend, the product service will have those 3 files in a folder.
                        </p>
                    </Card>
                    <Card title="Duplicate">
                        <p className="m-0">
                            The duplicate option allows the user to replicate the existing service into another version with a different file name.
                        </p>
                    </Card>
                    <Card title="Delete">
                        <p className="m-0">
                            Delete will allow us to remove the selected service from the system.
                        </p>
                    </Card>
                </AccordionTab>
                <AccordionTab header="Description about field details">
                    <p className="m-0">
                        As we know, there are backend and frontend components needed to develop an application. First of all,
                        there are important terms that we need to know and understand about how they work. Let’s get started.
                    </p>
                    <Card title="Field Name">
                        <p className="m-0">
                            The term "fieldname" in backend development often refers to the name assigned to a single data field or attribute in a data structure or database.
                            It is used to identify and access a specific piece of data within a larger structure in a unique way.
                            For example, if you're dealing with a database table that maintains user information, each user's record may include fields such as "username," "email," and "age". In this scenario,
                            the field names "username," "email," and "age" match specific properties of the user data.
                        </p>
                    </Card>
                    <Card title="Label">
                        <p className="m-0">
                            A label refers to a piece of text or visual element that is associated with a form input element. The label provides context or information about what kind of input is
                            expected in the corresponding input field. Labels play an essential role in creating user-friendly and accessible forms.
                        </p>
                    </Card>
                    <Card title="String Type">
                        <p className="m-0">
                            A string is a fundamental data type that represents a sequence of characters. It's used to store and manipulate textual information,
                            like words and sentences, in various software applications.
                        </p>
                        <Card title="Component">
                            <p className="m-0">
                                A component is a modular, reusable, and self-contained unit in software development. It encapsulates specific functionality, data, and user interface elements, promoting modularity and
                                easier maintenance in larger systems. Components are building blocks that can be combined to create complex applications.
                            </p>
                            <ComponentString/> 
                        </Card>
                    </Card>
                    <Card title="Boolean Type">
                        <p className="m-0">
                        Boolean is a data type representing true or false values, used for logical decisions and conditions.
                        </p>
                        <Card>
                            <ComponentBoolean/> 
                        </Card>
                    </Card>
                </AccordionTab>
                <AccordionTab header="Header III">
                    <Card title="Type">
                        <p className="m-0">
                            Delete will allow us to remove the selected service from the system.
                        </p>
                    </Card>
                </AccordionTab>
            </Accordion>
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

export default connect(mapState, mapDispatch)(DataHandlingGuidePage);