export const userColumns = [
  { field: "id", headerName: "ID", width: 120 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cell_with_img">
          <img src={params.row.img} alt="avatar" className="cell_img" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cell_with_status ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
export const userRows = [
  {
    id: 11431535,
    username: "Snow",
    img: "https://images-na.ssl-images-amazon.com/images/I/81bc8mA3nKL.__AC_SY300_SX300_QL70_FMwebp_.jpg",
    status: "active",
    email: "kinginthenorth@hotmail.com",
    age: 35,
  },
  {
    id: 32324535,
    username: "Jamie Lanister",
    img: "https://images-na.ssl-images-amazon.com/images/I/81bc8mA3nKL.__AC_SY300_SX300_QL70_FMwebp_.jpg",
    status: "passive",
    email: "kingslayer69@gmail.com",
    age: 35,
  },
  {
    id: 42824366,
    username: "Lannister",
    img: "https://images-na.ssl-images-amazon.com/images/I/81bc8mA3nKL.__AC_SY300_SX300_QL70_FMwebp_.jpg",
    status: "pending",
    email: "alabamaqueen@hotmail.com",
    age: 35,
  },
  {
    id: 20509158,
    username: "Melisandre",
    img: "https://images-na.ssl-images-amazon.com/images/I/81bc8mA3nKL.__AC_SY300_SX300_QL70_FMwebp_.jpg",
    status: "active",
    email: "delusionalfuck@gmail.com",
    age: 35,
  },
  {
    id: 33322955,
    username: "The Big Woman",
    img: "https://images-na.ssl-images-amazon.com/images/I/81bc8mA3nKL.__AC_SY300_SX300_QL70_FMwebp_.jpg",
    status: "active",
    email: "8feettall@gmail.com",
    age: 35,
  },
];
