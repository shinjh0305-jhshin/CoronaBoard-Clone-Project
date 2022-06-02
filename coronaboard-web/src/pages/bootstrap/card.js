import { React } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Container } from 'react-bootstrap';

export default function CardPage() {
    return (
        <Container className='pt-3'> {/*p:padding, m:margin  tblr:top bottom left right*/}
            <Card>
                <Card.Header>카드의 헤더</Card.Header>
                <Card.Body>
                    <Card.Title>카드의 타이틀</Card.Title>
                    <Card.Subtitle className='text-muted mb-3'> {/*muted : 텍스트 컬러 스타일*/}
                        카드의 서브타이틀
                    </Card.Subtitle>
                    <Card.Text>카드의 텍스트</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}