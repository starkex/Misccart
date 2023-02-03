import React,{useState} from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '../assets/styles/filters.css'
import { Slider} from 'antd';

const ShopFilters = () => {

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a href="-" ref={ref} onClick={(e) => {
            e.preventDefault();
            onClick(e);
          }}
        >
          {children}
          &#x25bc;
        </a>
      ));

      const CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
          const [value, setValue] = useState('');
      
          return (
            <div
              ref={ref}
              style={style}
              className={className}
              aria-labelledby={labeledBy}
            >
              <Form.Control
                autoFocus
                className="mx-3 my-2 w-auto"
                placeholder="Type to filter..."
                onChange={(e) => setValue(e.target.value)}
                value={value}
              />
              <ul className="list-unstyled">
                {React.Children.toArray(children).filter(
                  (child) =>
                    !value || child.props.children.toLowerCase().startsWith(value),
                )}
              </ul>
            </div>
          );
        },
      );

      
  return (
    <div>
        <Container>
            <Row className='m-auto mt-5 mb-4'>
                <Col lg={4} md={3}>
                    <div className='genres-filter'>
                        <p>Genres</p>
                        <Dropdown>
                            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                            Choose Your Genre
                            </Dropdown.Toggle>

                            <Dropdown.Menu as={CustomMenu}>
                            <Dropdown.Item eventKey="1">Routine</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Education</Dropdown.Item>
                            <Dropdown.Item eventKey="3" active>
                                Life
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="1">Romantic</Dropdown.Item>
                            <Dropdown.Item eventKey="1">Fiction</Dropdown.Item>
                            <Dropdown.Item eventKey="1">Spritual</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Col>
                <Col lg={4} md={3}>
                    <div className='price-filter'>
                        <p>Price Range</p>  
                        <div>
                            <Slider range min={100} max={3200} defaultValue={[250]} tooltip={{open:true}} />
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={3}>
                    <div className='sort-filter'>
                        <p>Sort by</p>
                        <DropdownButton id="dropdown-item-button" title="Dropdown button">
                            {/* <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText> */}
                            <Dropdown.Item as="button">Price High To Low</Dropdown.Item>
                            <Dropdown.Item as="button">Price Low To High</Dropdown.Item>
                            <Dropdown.Item as="button">Best Selling</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ShopFilters