import Styles from '../src/components/GlobalStyles/Styles'
import Card from '../src/components/Card/Card'
import Theme from './components/Theme/Theme'
import Tipography from './components/Tipography/Tipography';
import InputText from './components/InputText/InputText';
import { Container, Row, Col } from 'react-grid-system';
import Button from './components/Button/Button';


function App() {
  return (
    <Theme>
      <Styles />
      <Container style={ {margin: '80px 0'}}> 
        <Row justify="center">
          <Col lg={6} md={8} sm={12}>
            <Card>
            <Tipography kind="h1" component="h1">
              Crie seu cadastro
            </Tipography>
            
            <Tipography kind="body" component="body">
              Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho. Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho. 
            </Tipography>
              <Row>
                <Col lg={12} md={12} sm={12}>
                  <InputText label="Nome Completo" />
                </Col>
              </Row>

              <Row>
                <Col lg={4} md={4} sm={4}>
                  <InputText label="Estado" />
                </Col>
                <Col lg={8} md={8} sm={8}>
                  <InputText label="Cidade" />
                </Col>
              </Row>
              
              <Row>
                <Col>
                  <InputText label="E-mail" />
                </Col>
              </Row>

              <Row>
                <Col lg={6} md={6} sm={6}>
                  <InputText label="Senha" />
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <InputText label="Repita a senha" />
                </Col>
              </Row>

              <Row>
                <Col lg={6} md={6} sm={6}>
                  <Button variante='primary'> Anterior </Button>
                </Col>
              
                
                  <Col lg={6} md={6} sm={6}>
                  <div style={{textAlign: 'right'}}>
                    <Button> Proximo </Button>
                  </div>
                  </Col>
                
              </Row>

            </Card>
          </Col>
        </Row>
      </Container>

      
    </Theme>
  );
}

export default App;
