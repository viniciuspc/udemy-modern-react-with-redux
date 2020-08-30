import React from "react";

const Accordion = ({ items }) => {
  const onTitleClick = (index) => {
    console.log("Title clicked", index);
  };
  const renderedItems = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div
          className="title active"
          //Wrap with arrow function the onTitleClick is only executed when the div is clicked
          //Without the arrow function the onTitleClick will be executed as soon as it receives the parameter
          onClick={() => onTitleClick(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
