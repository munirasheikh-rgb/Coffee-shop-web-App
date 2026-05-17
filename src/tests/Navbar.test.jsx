import { render,screen } from "@testing-library/react";
import { BrowserRouter} from "react-router-dom";
import Navbar from "../components/Navbar";

test("renders navbar links",()=>{
    render(
        <BrowserRouter>
        <Navbar/>
        </BrowserRouter>
    )
    expect(screen.getByText(/home/i)).toBeInTheDocument()
    expect(screen.getByText(/shop/i)).toBeInTheDocument()
    expect(screen.getByText(/admin portal/i)).toBeInTheDocument()
    expect(screen.getByText(/login/i)).toBeInTheDocument()
    expect(screen.getByText(/contacts/i)).toBeInTheDocument()
})