import { FC, useContext } from "react"
import { Row, Col } from "react-bootstrap"
import LazyLoad from "react-lazyload"
import { AppContext } from "../../../app"

import { ReactComponent as YellowSnakeIcon } from "../../../assets/svg/yellow-snake.svg"
import { RoundedButton } from "../../../components/rounded-button"
import { IssueSolutionResponse } from "../../../types/home/solutions"

type SolutionBlockProps = {
  data: IssueSolutionResponse | null
  left?: boolean
}

const SolutionBlock: FC<SolutionBlockProps> = ({ data, left = false }) => {
  const { setShowRegModal } = useContext(AppContext)

  return (
    <>
      <Row className="g-0">
        <Col md={4}></Col>
        <Col md={8}>
          <h3 className="text-primary">{data?.title || ""}</h3>
        </Col>
      </Row>

      <div className="mt-5">
        <LazyLoad height={500}>
          <img className="img-fluid w-100" src={data?.image?.imageUrl} alt="" />
        </LazyLoad>
      </div>

      <Row className={`g-0 mt-5 ${left ? "flex-row-reverse" : ""}`}>
        <Col xs={0} lg={4}></Col>
        <Col xs={12} lg={8}>
          <Row
            className={`g-4 flex-nowrap flex-column ${
              left ? "flex-sm-row-reverse" : "flex-sm-row"
            }`}
          >
            <Col className="text-white">{data?.description || ""}</Col>
            <Col>
              <RoundedButton
                type={left ? "secondary" : "primary"}
                onClick={() => {
                  setShowRegModal(true)
                }}
              >
                бесплатная консультация
              </RoundedButton>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className={`g-0 my-5 ${left ? "flex-row-reverse" : ""}`}>
        <Col md={4}></Col>
        <Col md={8} className="position-relative" style={{ height: "53px" }}>
          <YellowSnakeIcon
            className="position-absolute"
            style={left ? { right: 0 } : { left: 0 }}
          />
        </Col>
      </Row>
    </>
  )
}

export { SolutionBlock }
