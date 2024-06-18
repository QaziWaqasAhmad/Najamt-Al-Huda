import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  FormControlLabel,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import dynamicTableStyle from "./style";
import { Delete, Edit, RemoveRedEye } from "@mui/icons-material";
// import { primaryColor } from "../../constants/colors";
import { useNavigate } from "react-router-dom";
import ImageResolver from "./ImageResolver";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array?.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis?.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const { headerData, order, orderBy, onRequestSort, classes } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow className={classes.headerRowsStyle}>
        {headerData.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            // align={headCell.numeric ? "right" : "left"}
            padding="normal"
            sortDirection={false}
          >
            {headCell.label !== "Actions" ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            ) : (
              <>
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function DynamicTable({
  headerData,
  bodyRows,
  displayData,
  showView,
  showEdit,
  showDelete,
  openEditDialog,
  handleDelete,
  navigateToDetail,
  showSwitch,
  handleEditStatus,
  handleProductStatus
}) {
  const classes = dynamicTableStyle();
  const navigate = useNavigate();
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("calories");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    console.log(isAsc,"Assmkjdkkfkjkfkjf");
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = headerData.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  console.log(bodyRows,"bodyRowsbodyRowsbodyRows");

  console.log(headerData,"headerDataheaderData");
  return (
    <Box sx={{ width: "100%", boxShadow: "0 0.2rem 1rem rgb(0 0 0 / 12%)" }}>
      <TableContainer>
        <Table sx={{ minWidth: 750,backgroundColor:"white" }} size="small" stickyHeader>
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={bodyRows.length}
            headerData={headerData}
            classes={classes}
          />
          <TableBody>
            {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
            {stableSort(bodyRows, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const isItemSelected = isSelected(row.name);
                
                return (
                  <TableRow
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    padding="normal"
                    className={classes.tableRowsStyle}
                  >
                    {displayData.map((val, i) => {
                      console.log(val,"valll=====>")
                      return (
                        <React.Fragment key={val}>
                          {val == "id" ? (
                            <TableCell padding="normal">{index + 1}</TableCell>
                          )  : val == "orginizationImage" ? ( 
                            <ImageResolver row={row.userImage} />
                          ) : val == "image" ? (
                            <ImageResolver row={row.image} />
                          ): val == "userImage" ?(
                            <ImageResolver row={row.userImage} />
                          ) : val == "licenseImage" ?(
                            <ImageResolver row={row.licenseImage} />
                          ): val == "safetyCertificate" ?(
                            <ImageResolver row={row.safetyCertificate} />
                          ): val == "featured" ? (
                            <TableCell>
                              <FormControlLabel
                                className={classes.restSwitch}
                                control={
                                  <Switch
                                    size="small"
                                    checked={row.isFeatured}
                                    onClick={(e) =>
                                      handleEditStatus(e, row, "feature")
                                    }
                                  />
                                }
                              />
                            </TableCell>
                          ) : val == "approve" ? (
                            <TableCell>
                              <FormControlLabel
                                className={classes.restSwitch}
                                control={
                                  <Switch
                                    size="small"
                                    checked={row.isApprove}
                                    onClick={(e) =>
                                      handleEditStatus(e, row, "approve")
                                    }
                                  />
                                }
                              />
                            </TableCell>
                          ) : val == "isApprove" ? (
                            <TableCell>
                              <FormControlLabel
                                className={classes.restSwitch}
                                control={
                                  <Switch
                                    size="small"
                                    checked={row.isApproved}
                                    onClick={(e) =>
                                      handleEditStatus(e, row, "approve")
                                    }
                                  />
                                }
                              />
                            </TableCell>
                          )
                          : val == "isShow" ? (
                            <TableCell>
                              <FormControlLabel
                                className={classes.restSwitch}
                                control={
                                  <Switch
                                    size="small"
                                    checked={row.isShow}
                                    onClick={(e) =>
                                      handleProductStatus(e, row, "approve")
                                    }
                                  />
                                }
                              />
                            </TableCell>
                          )
                          : val !== "actions" ? (
                            <TableCell padding="normal">{row[val]}</TableCell>
                          ) : (
                            <TableCell padding="normal">
                             {console.log(row,"jkdjjdkjjdk")}

                              {showView && (
                                <RemoveRedEye
                                  style={{
                                    color: "red",
                                    fontSize: "20px",
                                    cursor: "pointer",
                                    marginRight: "10px",
                                  }}
                                  onClick={() => navigateToDetail(row)}
                                />
                              )}
                              {showEdit && (
                                <Edit
                                  style={{
                                    marginRight: "10px",
                                    color: "#5769f3",
                                    fontSize: "20px",
                                    cursor: "pointer",
                                  }}
                                  onClick={() => openEditDialog(row)}
                                />
                              )}
                              {showDelete && (
                                <Delete
                                  style={{
                                    color: "red",
                                    fontSize: "20px",
                                    cursor: "pointer",
                                  }}
                                  onClick={() => handleDelete(row, index)}
                                />
                              )}
                            </TableCell>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, 100]}
        component="div"
        sx={{backgroundColor:"white",minWidth:250}}
        count={bodyRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
}
