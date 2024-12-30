import React from "react";
import "./Slambook.css";


function SlamBook() {
return (
    <div className="slambook-container">
        <form className="slambook-form">
            <fieldset>
                <legend className="title">Slam book</legend>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Nick name:
                    <input type="text" name="nickname" />
                </label>
                <label>
                    Address:
                    <textarea name="address" rows="3" />
                </label>
                <label>
                    Memories:
                    <textarea name="memories" rows="5" />
                </label>
                <label>
                    Gender:
                    <div className="gender-options">
                        <label>
                            <input type="radio" name="gender" value="Male" /> Male
                        </label>
                        <label>
                            <input type="radio" name="gender" value="Female" /> Female
                        </label>
                        <label>
                            <input type="radio" name="gender" value="Other" /> Other
                        </label>
                    </div>
                </label>
                <label>
                    Fav actors:
                    <div className="checkbox-options">
                        <label>
                            <input type="checkbox" name="actors" value="Actor1" /> Vijay
                        </label>
                        <label>
                            <input type="checkbox" name="actors" value="Actor2" /> Ajith
                        </label>
                        <label>
                            <input type="checkbox" name="actors" value="Actor3" /> Surya
                        </label>
                    </div>
                </label>
                <label>
                    School:
                    <select name="school">
                        <option value="">Select School</option>
                        <option value="School1">MM SCHOOL</option>
                        <option value="School2">MERRY LAND</option>
                        <option value="School3">IGMM</option>
                    </select>
                </label>
                <button type="submit">Submit</button>
            </fieldset>
        </form>
    </div>
);
}

export default SlamBook;
