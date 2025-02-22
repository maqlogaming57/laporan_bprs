import React, { useEffect, useState } from 'react'
import {
  CAvatar,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CFormInput,
  CForm,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import axios from 'axios'

const Dashboard = () => {
  // const progressExample = [
  //   { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
  //   { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
  //   { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
  //   { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
  //   { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  // ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  const progressGroupExample2 = [
    { title: 'Male', icon: cilUser, value: 53 },
    { title: 'Female', icon: cilUserFemale, value: 43 },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  ]

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'India', flag: cifIn },
      usage: {
        value: 74,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 98,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Agapetus Tadeáš',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Spain', flag: cifEs },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Friderik Dávid',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Poland', flag: cifPl },
      usage: {
        value: 43,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]
  let i = 1
  const [data, setData] = useState([])
  const [totalNominal, setTotalNomial] = useState(0)
  const [loading, setLoading] = useState(true)
  const [dataNpf, setDataNpf] = useState([])
  const [totalNpf, setTotalNpf] = useState(0)
  const [npfLoc, setNpfLoc] = useState([])
  const [cashRatio, setCR] = useState([])
  const [selectedDate, setSelectedDate] = useState('')
  const [pengurang2, setPengurang2] = useState(1608000000)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const token = localStorage.getItem('token')

      try {
        // Pastikan token ada sebelum membuat permintaan
        const response = await axios.get(`${process.env.REACT_APP_URL_API}/customers/os`, {
          headers: {
            Authorization: `${token}`,
            'Content-Type': 'application/json',
          },
        })
        const responData = response.data.data
        setData(responData)
        const calculatedTotal = responData.reduce((acc, user) => acc + user.totalos, 0)
        setTotalNomial(calculatedTotal)

        const responseNpf = await axios.get(`${process.env.REACT_APP_URL_API}/colls/npf`, {
          headers: {
            Authorization: `${token}`,
            'Content-Type': 'application/json',
          },
        })
        const responDataNpf = responseNpf.data.data
        setDataNpf(responDataNpf)
        const calculatedNpf = responDataNpf.reduce(
          (acc, user) => acc + user.col_3 + user.col_4 + user.col_5,
          0,
        )
        setTotalNpf(calculatedNpf)
        setLoading(false)

        const responseNpfLoc = await axios.get(`${process.env.REACT_APP_URL_API}/colls/kdloc`, {
          headers: {
            Authorization: `${token}`,
            'Content-Type': 'application/json',
          },
        })
        const responseDataLoc = responseNpfLoc.data.data
        setNpfLoc(responseDataLoc)
        setLoading(false)

        if (selectedDate) {
          const [year, month, day] = selectedDate.split('-') // Format YYYY-MM-DD
          const responCR = await axios.get(
            `${process.env.REACT_APP_URL_API}/cashratio/${day}/${month}/${year}`,
            {
              headers: {
                Authorization: `${token}`,
                'Content-Type': 'application/json',
              },
            },
          )
          const responsedataCr = responCR.data.data
          setCR(responsedataCr)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false) // Pastikan loading selesai
      }
    }

    fetchData() // Panggil fungsi fetchData
  }, [selectedDate]) // Fetch data saat selectedDate berubah

  const formatToRupiah = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
      .format(amount)
      .replace('Rp', '')
      .trim()
  }

  return (
    <>
      <WidgetsDropdown />
      <CRow>
        <CCol xs={12} sm={7} lg={6}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Nasabah</strong> <small>NPF Per-cabang</small>
            </CCardHeader>
            <CTable small striped hover>
              <CTableHead color="dark">
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Cabang</CTableHeaderCell>
                  <CTableHeaderCell scope="col">OS</CTableHeaderCell>
                  <CTableHeaderCell scope="col">%</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {npfLoc.map((ost, index) => {
                  return (
                    <>
                      <CTableRow key={index}>
                        <CTableHeaderCell scope="row">{index + i}</CTableHeaderCell>
                        <CTableDataCell>KCP Pusat</CTableDataCell>
                        <CTableDataCell>{formatToRupiah(ost.kdloc_01)}</CTableDataCell>
                        <CTableDataCell>
                          {((ost.kdloc_01 / totalNominal) * 100).toFixed(2).slice(0, 4)}%
                        </CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableHeaderCell scope="row">{++i}</CTableHeaderCell>
                        <CTableDataCell>Batang</CTableDataCell>
                        <CTableDataCell>{formatToRupiah(ost.kdloc_02)}</CTableDataCell>
                        <CTableDataCell>
                          {((ost.kdloc_02 / totalNominal) * 100).toFixed(2).slice(0, 4)}%
                        </CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableHeaderCell scope="row">{++i}</CTableHeaderCell>
                        <CTableDataCell>Purwokerto</CTableDataCell>
                        <CTableDataCell>{formatToRupiah(ost.kdloc_03)}</CTableDataCell>
                        <CTableDataCell>
                          {((ost.kdloc_03 / totalNominal) * 100).toFixed(2).slice(0, 4)}%
                        </CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableHeaderCell colSpan="2" className="text-end">
                          Total
                        </CTableHeaderCell>
                        <CTableDataCell>{formatToRupiah(ost.osnpf)}</CTableDataCell>
                        <CTableDataCell>
                          {((ost.osnpf / totalNominal) * 100).toFixed(2).slice(0, 4)}%
                        </CTableDataCell>
                      </CTableRow>
                    </>
                  )
                })}
              </CTableBody>
            </CTable>
          </CCard>
        </CCol>
        <CCol xs={12} sm={7} lg={6}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>NPF</strong>
            </CCardHeader>
            <CTable small striped hover>
              <CTableHead color="dark">
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Coll</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Os</CTableHeaderCell>
                  <CTableHeaderCell scope="col">%</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {dataNpf.map((user, index) => {
                  const col3Value = user.col_3
                  const col4Value = user.col_4
                  const col5Value = user.col_5

                  return (
                    <React.Fragment key={index}>
                      <CTableRow>
                        <CTableHeaderCell scope="row">{index + i}</CTableHeaderCell>
                        <CTableDataCell>3</CTableDataCell>
                        <CTableDataCell>{formatToRupiah(user.col_3)}</CTableDataCell>
                        <CTableDataCell>
                          {((col3Value / totalNominal) * 100).toFixed(2).slice(0, 4)}%
                        </CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableHeaderCell scope="row">{++i}</CTableHeaderCell>
                        <CTableDataCell>4</CTableDataCell>
                        <CTableDataCell>{formatToRupiah(user.col_4)}</CTableDataCell>
                        <CTableDataCell>
                          {((col4Value / totalNominal) * 100).toFixed(2).slice(0, 4)}%
                        </CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableHeaderCell scope="row">{++i}</CTableHeaderCell>
                        <CTableDataCell>5</CTableDataCell>
                        <CTableDataCell>{formatToRupiah(user.col_5)}</CTableDataCell>
                        <CTableDataCell>
                          {((col5Value / totalNominal) * 100).toFixed(2).slice(0, 4)}%
                        </CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableHeaderCell colSpan="2" className="text-end">
                          Total
                        </CTableHeaderCell>
                        <CTableDataCell>{formatToRupiah(totalNpf)}</CTableDataCell>
                        <CTableDataCell>
                          {((totalNpf / totalNominal) * 100).toFixed(2).slice(0, 5)}%
                        </CTableDataCell>
                      </CTableRow>
                    </React.Fragment>
                  )
                })}
              </CTableBody>
            </CTable>
          </CCard>
        </CCol>
        <CCol xs={12} sm={7} lg={6}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Cash Ratio</strong>
            </CCardHeader>
            <CCol xs="auto">
              <CFormInput
                type="date"
                onChange={(e) => setSelectedDate(e.target.value)}
                value={selectedDate}
              />
            </CCol>
            <CTable small striped hover>
              <CTableHead color="dark">
                <CCol xs="auto"></CCol>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col"></CTableHeaderCell>
                  <CTableHeaderCell scope="col"></CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {cashRatio.map((cr, index) => {
                  const likiuditas = cr.likuid
                  const pengurang = cr.pengurang
                  const pembagi = cr.pembagi

                  const totalCashRatio = (likiuditas - pengurang - pengurang2) / pembagi
                  const totalCR = totalCashRatio * 100

                  return (
                    <>
                      <CTableRow key={index}>
                        <CTableHeaderCell scope="row">{index + i}</CTableHeaderCell>
                        <CTableDataCell>Likiuditas</CTableDataCell>
                        <CTableDataCell>{formatToRupiah(cr.likuid)}</CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableHeaderCell scope="row">{++i}</CTableHeaderCell>
                        <CTableDataCell>Pengurang</CTableDataCell>
                        <CTableDataCell>{formatToRupiah(cr.pengurang)}</CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableHeaderCell scope="row">{++i}</CTableHeaderCell>
                        <CTableDataCell>Pengurang 2</CTableDataCell>
                        <CTableDataCell>
                          <CFormInput
                            type="number"
                            value={pengurang2}
                            onChange={(e) => setPengurang2(Number(e.target.value))} // Perbarui state saat input berubah
                          />
                          <small>{formatToRupiah(pengurang2)}</small>
                        </CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableHeaderCell scope="row">{++i}</CTableHeaderCell>
                        <CTableDataCell>Pembagi</CTableDataCell>
                        <CTableDataCell>{formatToRupiah(cr.pembagi)}</CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableHeaderCell colSpan="2" className="text-end">
                          Cash Ratio
                        </CTableHeaderCell>
                        <CTableDataCell>{totalCR.toFixed(2)}%</CTableDataCell>
                      </CTableRow>
                    </>
                  )
                })}
              </CTableBody>
            </CTable>
          </CCard>
        </CCol>
      </CRow>
      <CCard className="mb-4">
        {/* <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Traffic
              </h4>
              <div className="small text-medium-emphasis">January - July 2021</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Day', 'Month', 'Year'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Month'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                  fill: true,
                },
                {
                  label: 'My Second dataset',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-success'),
                  pointHoverBackgroundColor: getStyle('--cui-success'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                },
                {
                  label: 'My Third dataset',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-danger'),
                  pointHoverBackgroundColor: getStyle('--cui-danger'),
                  borderWidth: 1,
                  borderDash: [8, 5],
                  data: [65, 65, 65, 65, 65, 65, 65],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody> */}
        {/* <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
            {progressExample.map((item, index) => (
              <CCol className="mb-sm-2 mb-0" key={index}>
                <div className="text-medium-emphasis">{item.title}</div>
                <strong>
                  {item.value} ({item.percent}%)
                </strong>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter> */}
      </CCard>

      <WidgetsBrand withCharts />

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Traffic {' & '} Sales</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">New Clients</div>
                        <div className="fs-5 fw-semibold">9,123</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Recurring Clients</div>
                        <div className="fs-5 fw-semibold">22,643</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />
                  {progressGroupExample1.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-prepend">
                        <span className="text-medium-emphasis small">{item.title}</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="info" value={item.value1} />
                        <CProgress thin color="danger" value={item.value2} />
                      </div>
                    </div>
                  ))}
                </CCol>

                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Pageviews</div>
                        <div className="fs-5 fw-semibold">78,623</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Organic</div>
                        <div className="fs-5 fw-semibold">49,123</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  {progressGroupExample2.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">{item.value}%</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="warning" value={item.value} />
                      </div>
                    </div>
                  ))}

                  <div className="mb-5"></div>

                  {progressGroupExample3.map((item, index) => (
                    <div className="progress-group" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value}{' '}
                          <span className="text-medium-emphasis small">({item.percent}%)</span>
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="success" value={item.percent} />
                      </div>
                    </div>
                  ))}
                </CCol>
              </CRow>

              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>User</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Country</CTableHeaderCell>
                    <CTableHeaderCell>Usage</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Payment Method</CTableHeaderCell>
                    <CTableHeaderCell>Activity</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.usage.value}%</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">{item.usage.period}</small>
                          </div>
                        </div>
                        <CProgress thin color={item.usage.color} value={item.usage.value} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.payment.icon} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">Last login</div>
                        <strong>{item.activity}</strong>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
