import { FC, useEffect, useState } from "react"
import { Row, Col } from "react-bootstrap"

import { EmployeeCard } from "./employee-card"
import { employeesApi } from "../../../api/employees-api"
import { EmployeeResponse } from "../../../types/home/employee"
import { StaffSectionResponse } from "../../../types/home/staff"

const Staff: FC<StaffSectionResponse> = ({ header }) => {
  const [employees, setEmployees] = useState<EmployeeResponse[]>([])

  const fetchData = async () => {
    const data = await employeesApi.getAll()
    setEmployees(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <h2 className="block-title">{header}</h2>

      <div className="block-content">
        <Row className="flex-column gy-5">
          {employees.map((employee, index) => (
            <Col key={`employee-card-${index}`}>
              <EmployeeCard reverse={index % 2 === 1} {...employee} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  )
}

export { Staff as default }
