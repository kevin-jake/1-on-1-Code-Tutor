function render(reactElement, containerDOMElement) {
  // 1. create a DOM element
  const domElement = document.createElement(reactElement.type);

  // 2. update properties
  domElement.innerText = reactElement.children;
  for (const key in reactElement.props) {
    const value = reactElement.props[key];
    domElement.setAttribute(key, value);
  }

  // 3. put it in the container
  containerDOMElement.appendChild(domElement);
}

const reactElement = {
  type: "p",
  props: {
    id: "test",
  },
  children: "This is a test",
};

const containerDOMElement = document.querySelector("#root");

render(reactElement, containerDOMElement);
