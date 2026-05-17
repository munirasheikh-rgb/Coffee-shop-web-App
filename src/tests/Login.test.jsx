import { render,screen,fireEvent,waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { expect, vi } from "vitest";
import Login from "../pages/Login.jsx"

global.fetch = vi.fn()
test("log in user with the correct  email and pasword",async()=>{
    fetch.mockResolvedValueOnce({
        json:async()=>[
            {
                id:1,
                email:"munira@test.com",
                password:"12345678",
            }
        ]
    })
    render(
        <BrowserRouter>
        <Login/>
        </BrowserRouter>
    )
    fireEvent.change(screen.getByPlaceholderText(/Enter email/i),{
        target:{value:"munira@test.com"},
    })
    fireEvent.change(screen.getByPlaceholderText(/Enter password/i),{
        target:{value:"12345678"},
    })
    fireEvent.click(screen.getByRole("button",{name:/login/i}))
  await waitFor(()=>{expect(fetch).toHaveBeenCalled()})
})