import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { IoMdJet } from "react-icons/io";
import { TextField, Typography, Box, MenuItem, Grid } from "@mui/material";
import axios from 'axios';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';


export default function EditTour() {

    const { packageId } = useParams()


    //to navigate to the home page after clicking submit
    let navigate = useNavigate()

    const [tour, setTour] = useState({
        packageId: "",
        packageName: "",
        destinationPlace: "",
        price: "",
        description: "",
        duration: "",
        packageType: "",
        travelMode: "",
        personsAlllowed: "",
        destImage: ""

    })


    //.. for keep on adding new data or objects
    const onInputChange = (e) => {
        setTour({ ...tour, [e.target.name]: e.target.value });
    };

    const handleFileChange = (event) => {
        setTour((prevTour) => ({ ...prevTour, destImage: event.target.files[0] }));
    };



    //to insert the data fetch axios link from postman API
    const onSubmit = async (e) => {
        console.log(tour);
        e.preventDefault();

        const formdata = new FormData();

        formdata.append("packageId", tour.packageId);
        formdata.append("packageName", tour.packageName);
        formdata.append("destinationPlace", tour.destinationPlace);
        formdata.append("price", tour.price);
        formdata.append("description", tour.description);
        formdata.append("duration", tour.duration);
        formdata.append("packageType", tour.packageType);
        formdata.append("travelMode", tour.travelMode);
        formdata.append("personsAlllowed", tour.personsAlllowed);
        formdata.append("destImage", tour.destImage);


        await axios.put(`http://localhost:8080/doPackageDetailsUpdate`, formdata)
            .then((res) => {
                navigate('/adminViewTour');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        const loadAllTours = async (e) => {
            await axios
                .get(`http://localhost:8080/GetPackageId/${packageId}`)
                .then((res) => setTour({ ...res.data, packageId: packageId }))
                .catch((err) => console.log(err));
        };

        loadAllTours();
    }, [packageId]);

    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        <span><IoMdJet />  Tourism Management System
                        </span>
                        <span className="icon">
                        </span>
                    </NavLink>

                    <ul className="nav-item"
                    // className={click ? "nav-menu active" : "nav-menu"}
                    >

                        <NavLink
                            exact
                            to="/"
                            activeClassName="active"
                            className="nav-links"
                        // onClick={handleClick}
                        >
                            <ArrowLeftIcon /> Back to Home
                        </NavLink>
                    </ul>

                </div>
            </nav>




            <div className="d-flex justify-content-center align-items-center vh-50 ">
                <br />
                <br />
                <Box
                    sx={{
                        display: "flex",
                        width: "1000px",
                        justifyContent: "center",
                        alignItems: "center",
                        // height: "80vh",
                        border: "5px solid grey ",
                    }}
                    className="border dotted shadow "
                >
                    <Box sx={{ width: "180%" }} >
                        <Typography variant="h5" style={{ textAlign: "center" }} gutterBottom>
                            <b> UPDATE TOUR PACKAGE DETAILS <AppRegistrationIcon />  </b></Typography>

                        <form onSubmit={onSubmit}>
                            <Grid container spacing={1}>

                                <Grid item xs={12} md={6}>
                                    <TextField
                                        required
                                        label=" Package  Id"
                                        name="packageId"
                                        fullWidth
                                        margin="normal"
                                        size="medium"
                                        value={packageId}
                                        onChange={(e) => onInputChange(e)}
                                    />
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <TextField
                                        required
                                        label="Enter Package  Name"
                                        name="packageName"
                                        fullWidth
                                        margin="normal"
                                        size="medium"
                                        value={tour.packageName}
                                        onChange={(e) => onInputChange(e)}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={1}>

                                <Grid item xs={12} md={6}>
                                    <TextField
                                        required

                                        label="Enter Destination Name"
                                        name="destinationPlace"
                                        size="medium"
                                        fullWidth
                                        margin="normal"
                                        value={tour.destinationPlace}

                                        onChange={(e) => onInputChange(e)}
                                    />
                                </Grid>


                                <Grid item xs={12} md={6}>

                                    <TextField
                                        required
                                        label="Enter Cost of Tour"
                                        name="price"
                                        size="medium"
                                        fullWidth
                                        value={tour.price}

                                        margin="normal"
                                        onChange={(e) => onInputChange(e)}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={1}>

                                <Grid item xs={12} md={6}>
                                    <TextField
                                        required
                                        label="Enter tour Description"
                                        name="description"
                                        size="medium"
                                        fullWidth
                                        margin="normal"
                                        value={tour.description}

                                        onChange={(e) => onInputChange(e)}
                                    />

                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <TextField
                                        required
                                        label="Enter Total duration"
                                        name="duration"
                                        type="text"
                                        fullWidth
                                        margin="normal"
                                        size="medium"
                                        value={tour.duration}

                                        onChange={(e) => onInputChange(e)}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={1}>

                                <Grid item xs={12} md={6}>
                                    <TextField
                                        required
                                        select
                                        label="Enter Package Type"
                                        name="packageType"
                                        value={tour.packageType}

                                        onChange={(e) => onInputChange(e)}
                                        fullWidth
                                        margin="normal"
                                    >
                                        <MenuItem value="type1">Luxury</MenuItem>
                                        <MenuItem value="type2">Cultural</MenuItem>
                                        <MenuItem value="type3">Adventure</MenuItem>
                                    </TextField>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <TextField
                                        required
                                        label="Enter Travel Mode"
                                        name="travelMode"
                                        type="text"
                                        fullWidth
                                        margin="normal"
                                        value={tour.travelMode}

                                        size="medium"
                                        onChange={(e) => onInputChange(e)}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={1}>

                                <Grid item xs={12} md={6}>
                                    <TextField
                                        required
                                        label="Enter Persons Allowed"
                                        name="personsAlllowed"
                                        size="medium"
                                        fullWidth
                                        value={tour.personsAlllowed}

                                        margin="normal"
                                        onChange={(e) => onInputChange(e)}
                                    />

                                </Grid>

                                <Grid item xs={15} md={6}>
                                    <TextField
                                        name="destImage"
                                        type="file"
                                        fullWidth
                                        margin="normal"
                                        size="medium"

                                        onChange={handleFileChange}
                                        helperText="Choose Destination Image"
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={15} md={6}><br />

                                <button type='submit' className='submit btn btn-dark' sx={{ mt: 3, mb: 2, bgcolor: '#1f5156' }}
                                    id='insertsubmit' data-testid="pet-submit" to={'/adminViewTour'}>SUBMIT</button>
                                <Link type='submit' className='btn btn-danger mx-2' to="/adminViewTour" >CANCEL</Link>
                            </Grid>
                        </form>
                    </Box>
                </Box>

            </div >
        </>
    )
}