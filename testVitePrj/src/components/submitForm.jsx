import { useState } from "react";

export default function SubmitForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        address: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;  // Lấy data từ ô input
        setFormData(
            {
                ...formData, // Distructuring 
                [name]: value
            }
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            fullName: "",
            phone: "",
            address: ""
        })
        console.log(formData); // Submit formData gửi lên API 
    }

    return (
        <div className="formSubmit">
            <form onSubmit={handleSubmit} className="inputContainer">
                <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Please Enter The FullName"
                    type="text"
                />

                <br />

                <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Please Enter The Phone"
                    type="text"
                />

                <br />

                <input
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Please Enter The Address"
                    type="text"
                />

                <br />

                <button type="submit">Xác Nhận</button>

            </form>

            <div className="testData">
                <p>Name is: {formData.fullName}</p>
                <p>Phone is: {formData.phone}</p>
                <p>Address is: {formData.address}</p>
            </div>

        </div>
    )
}