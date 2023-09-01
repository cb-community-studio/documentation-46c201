import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';



const ComponentString = () => {
    const stringdata = [
        { type: 'Text', description: 'Text is a collection of characters that form words, sentences, or paragraphs.' },
        { type: 'Input', description: 'An input refers to data or information that is provided to a system, program, or process. It can come from various sources, such as users, sensors, files, or other software components.' },
        { type: 'Icon', description: 'An icon is a visual representation or symbol that represents an object, action, concept, or idea. Icons are used to convey information quickly and intuitively, often serving as shortcuts or visual cues in user interfaces.' },
        { type: 'Image', description: 'Images can convey information, tell stories, or evoke emotions through visual content. They are widely used in various forms of media, including websites, documents, presentations, and art. In digital contexts, images are stored as files containing pixel data, colors, and shapes that create a visual representation when displayed on screens or printed.' },
        { type: 'Avatar', description: 'Avatar is a representation of people using icons, labels, and images.' },
        { type: 'Chip', description: 'A chip component is typically a small, rounded element that displays a piece of information, often in a visually appealing and compact manner. Chips are commonly used to represent items such as tags, labels, or categories. They can contain text, icons, or both.' },
        { type: 'Tag', description: 'Tags are used to categorize or label content for easy organization and retrieval. On blogging platforms and content management systems, users often add tags to their posts or articles to make it easier for readers to find related content.' },
        // ... other data objects
    ];

    return (
        <div>
            <DataTable value={stringdata} stripedRows >
                <Column field="type" header="Type of Component" />
                <Column field="description" header="Description" />
            </DataTable>
        </div>
    );
};

const ComponentBoolean = () => {
    const booleandata = [
        { type: 'Text', description: 'Text is a collection of characters that form words, sentences, or paragraphs.' },
        { type: 'Tick', description: 'A tick can refer to a checkmark (√), a symbol used to indicate that something is correct or completed.' },
        { type: 'CheckBox', description: 'A checkbox is a user interface element that allows users to select or deselect an option. It typically appears as a small square box that can be checked (marked) or left unchecked (empty). Checkboxes are often used to represent binary choices, where a user can choose between two distinct states, such as true or false.' },
        { type: 'Switch', description: 'A "switch" is a user interface component that provides a way to toggle between two states, typically an "on" state and an "off" state.' },
        // ... other data objects
    ];

    return (
        <div>
            <DataTable value={booleandata} stripedRows >
                <Column field="type" header="Type of Component" />
                <Column field="description" header="Description" />
            </DataTable>
        </div>
    );
};

const ComponentNumber = () => {
    const numberdata = [
        { type: 'Text', description: 'Text component" typically refers to a UI element that displays text. While this component is not specifically designed to display numbers, it can certainly be used to display numeric values by converting those values into strings before rendering them in the text component.' },
        { type: 'Input', description: 'An "input component" for numbers is a user interface element that allows users to input numeric values. This component is designed to specifically handle numeric input, ensuring that the data entered by the user is valid and can be used for calculations or other purposes. Using an input component for numbers can offer benefits such as validation, formatting, and a better user experience compared to using a generic text input.' },
        { type: 'Badge', description: 'A "badge" in frontend development is a UI component used to display a numeric value or a short status indicator. Badges are often small, stylized elements that can be added to various parts of a user interface to provide quick information to users. While badges are not typically used as direct input components for numbers, they are commonly used to display numeric data in a visually appealing way. For instance, a badge can be used to display the count of unread messages, notifications, items in a shopping cart, or any other numeric value that needs to be highlighted to the user.' },
        { type: 'Knob', description: 'A knob is a UI component that allows users to interactively adjust a numeric value by rotating or dragging a circular control. Knobs are often used to provide a tactile and intuitive way to change values, such as volume levels, settings, or parameters. A knob component typically includes a circular visual representation that users can click, drag, or rotate to increase or decrease the associated numeric value.' },
        { type: 'Rating', description: 'A "rating" component is used to allow users to provide a numeric value, often representing their opinion or evaluation of something. Ratings are commonly used to let users rate products, services, or content, typically on a scale of stars, points, or other symbols.A rating component can be visualized as a set of selectable elements (such as stars) that users can interact with to indicate their preference or satisfaction level.' },
        { type: 'Slider', description: 'A "slider" is a user interface component that allows users to select a numeric value from a continuous range by dragging a handle along a track. Sliders provide an interactive and intuitive way to adjust numeric values, such as volume levels, selecting a price range, or choosing a date and time.A slider typically consists of a visual track representing the range of values and a movable handle that users can drag to select a specific point on the track. As the handle is moved, the corresponding numeric value is updated in real-time, providing immediate feedback.' },
        { type: 'Progres Bar', description: 'Progress bars are used to give users an idea of how much time or work is left until a particular task is completed. They are commonly found in applications that involve file uploads, downloads, form submissions, loading content, or any other operation that takes time.' },
        // ... other data objects
    ];

    return (
        <div>
            <DataTable value={numberdata} stripedRows >
                <Column field="type" header="Type of Component" />
                <Column field="description" header="Description" />
            </DataTable>
        </div>
    );
};

const ComponentDate = () => {
    const datedata = [
        { type: 'Text', description: 'Text component can refer to a user interface element used to display textual content. However, using a text component to display a date might involve converting the date data into a human-readable text format.For instance, a date like "2023-08-30" can be transformed into a more user-friendly format like "August 30, 2023" using a text component.' },
        { type: 'Calendar', description: 'Calendar component" is a user interface element used to display and interact with dates, typically in a calendar format. It provides a visual representation of days, weeks, and months, allowing users to view and navigate through dates.' },
        // ... other data objects
    ];

    return (
        <div>
            <DataTable value={datedata} stripedRows >
                <Column field="type" header="Type of Component" />
                <Column field="description" header="Description" />
            </DataTable>
        </div>
    );
};

// Advance Setting for Unique // 
const UniqueConcept = () => {
    const Uniquedata = [
        { type: 'Unique Identifiers', description: 'Ensuring that each item or element has a unique identifier helps with proper identification, tracking, and management. This is important for data integrity and effective interactions.' },
        { type: 'Unique Values', description: 'When working with data, unique values often refer to making sure that no two pieces of data are identical. For example, in a user registration process, ensuring that each email address is unique to a single user account.' },
        { type: 'Unique Constraints', description: 'In databases, unique constraints prevent duplicate values from being inserted into a field. This is important to maintain data consistency and prevent errors.' },
        { type: 'Unique Components', description: 'When building user interfaces, having unique components ensures that different parts of the interface are easily distinguishable and can be styled or interacted with separately.' },
        // ... other data objects
    ];

    return (
        <div>
            <DataTable value={Uniquedata} stripedRows >
                <Column field="type" header="Type of Concepts" />
                <Column field="description" header="Description" />
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
                            <ComponentString />
                        </Card>
                    </Card>
                    <Card title="Boolean Type">
                        <p className="m-0">
                            Boolean is a data type representing true or false values, used for logical decisions and conditions.
                        </p>
                        <Card>
                            <ComponentBoolean />
                        </Card>
                    </Card>
                    <Card title="Number Type">
                        <p className="m-0">
                            Number generally refers to a data type used to represent numeric values. Numbers can include both integers (whole numbers) and floating-point numbers (decimal numbers).
                        </p>
                        <Card>
                            <ComponentNumber />
                        </Card>
                    </Card>
                    <Card title="Date Type">
                        <p className="m-0">
                            "Date" refers to a data type that represents a specific point in time, including the day, month, year, and often the time as well. Dates are commonly used for displaying, manipulating, and working with chronological information in user interfaces.
                        </p>
                        <Card>
                            <ComponentDate />
                        </Card>
                    </Card>
                    <Card title="Array Type">
                        <p className="m-0">
                            An array is a data structure that holds a series of elements indexed from zero. It's like a list of items, such as numbers or strings.<br></br> For example, `const fruits = ['apple', 'banana', 'orange'];` represents an array named `fruits` containing three strings.\
                        </p>
                    </Card>
                    <Card title="ObjectId Type">
                        <p className="m-0">
                            Not available
                        </p>
                    </Card>
                    <Card title="Default">
                        <p className="m-0">
                            Default is used to set the standrd item or value that will be used or begin as the system clears off.
                        </p>
                    </Card>
                </AccordionTab>
                <AccordionTab header="Advance Setings">
                    <Card title="Display">
                        <p className="m-0">
                            Delete will allow us to remove the selected service from the system.
                        </p>
                    </Card>
                    <Card title="Sortable">
                        <p className="m-0">
                            "Sortable" generally refers to the ability to rearrange items in a specific order or sequence, often by dragging and dropping them.
                            In a front-end context, a "sortable" feature is typically implemented using JavaScript libraries or frameworks to allow users to interactively reorder items in a list or grid.
                            <br></br>
                            A sortable UI component is commonly used for tasks like reordering to-do list items, organizing photos in an album, or prioritizing tasks.
                            It provides a user-friendly way to change the sequence of elements without relying on complex manual operations.
                        </p>
                    </Card>
                    <Card title="Editable">
                        <p className="m-0">
                            "Editable" refers to the ability to modify or change content directly within a user interface. In a frontend context, an "editable" element
                            allows users to interact with and modify text, data, or other content within a web page or application without requiring a separate editing interface.
                            <br></br>
                            For example, an editable text field enables users to click or select the text and make changes right there, similar to how you can edit text in a
                            word processor. An editable data table might allow users to modify values directly within the table cells without navigating to a separate form.
                            <br></br>
                            Editable elements enhance the user experience and efficiency, as they eliminate the need to switch between viewing and editing modes.
                            However, it's important to ensure that editable elements are clear and user-friendly and that changes are properly validated and saved if necessary.
                        </p>
                    </Card>
                    <Card title="Required">
                        <p className="m-0">
                            "In frontend development, the term 'required' usually refers to indicating that a certain input or field must be filled out by the user before proceeding.
                            It's a validation mechanism to ensure that essential information is provided in forms or user interfaces.
                            <br></br>
                            For example, a 'required' attribute can be added to an HTML {"<input>"} element to specify that the associated field must be completed before submitting a form.
                            In user interfaces, a visual indicator like an asterisk (*) might be used to denote required fields.
                        </p>
                    </Card>
                    <Card title="Unique">
                        <p className="m-0">
                            In front-end development, "unique" typically refers to ensuring that something is distinct and not repeated or duplicated within a specific context.
                            The concept of "unique" helps maintain order, data accuracy, and user experience in front-end applications.
                            <hr></hr>
                            This concept is used to prevent data redundancy and maintain accuracy in various aspects of a front-end application:
                        </p>
                        <UniqueConcept />
                    </Card>
                    <Card title="Lowercase">
                        <p className="m-0">
                            Lowercase refers to the standard form of letters in the English alphabet that are in their smaller, non-capitalized form. It's used to represent text or data where all the letters are in their lowercase representation.
                            <br></br>
                            <br></br>
                            For example, converting a string to lowercase involves changing all uppercase letters within the string to their corresponding lowercase counterparts. This is often used to ensure consistent formatting and comparisons in text processing.
                        </p>
                    </Card>
                    <Card title="Duplicate Field">
                        <p className="m-0">
                            The duplicate option allows the user to replicate the entire selected field into another version with a different file name.
                        </p>
                    </Card>
                    <Card title="Delete Field">
                        <p className="m-0">
                            Delete will allow us to remove the selected field from the service.
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