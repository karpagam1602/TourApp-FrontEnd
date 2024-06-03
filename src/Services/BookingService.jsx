import React, { Component } from "react";
import axios from "axios";
const GET = "http://localhost:8080/getpendingBookingList";
const GETAllBookings = "http://localhost:8080/getAllbookingList";
const GETApproved = "http://localhost:8080/getApprovedBookingList";
const GETRejected = "http://localhost:8080/getRejectedBookingList";
const SAVE = "http://localhost:8080/doBookingInsert";
const FetchId = "http://localhost:8080/GetBookingId/";
const GetIdList = "http://localhost:8080/getBookingIdList";



class BookingService extends Component {
  getPendingBookings() {
    return axios.get(GET);
  }
  getAllBookings() {
    return axios.get(GETAllBookings);
  }
 
  getApprovedBookings() {
    return axios.get(GETApproved);
  }
  getRejectBookings() {
    return axios.get(GETRejected);
  }
 
  saveBooking(book) {
    return axios.post(SAVE, book);
  }
  fetchBooking(bookingId) {
    return axios.get(FetchId + bookingId);
  }


  getBookingIdList() {
    return axios.get(GetIdList);
  }
}
export default new BookingService()
