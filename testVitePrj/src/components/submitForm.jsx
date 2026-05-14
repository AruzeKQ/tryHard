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
                    type="text"
                />

                <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="text"
                />

                <input
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    type="text"
                />

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