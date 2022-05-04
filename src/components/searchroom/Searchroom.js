import './Searchroom.css'

const Searchroom = () =>
{
    return(
        <div class = "container mt-4">
            <div>
                <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder= "Let's search with a city or place name..."/>
                <datalist id="datalistOptions">
                    <option value="Islamabad">Islamabad</option>
                    <option value="Chitral">Chitral</option>
                    <option value="Hunza">Hunza</option>
                    <option value="Murree">Murree</option>
                    <option value="Nathia Gali">Nathia Gali</option>
                    <option value="Naran">Naran</option>
                    <option value="Swat">Swat</option>
                </datalist>
            </div>

            <div class = "row mt-3">
               
                <div class = "col-6 col-md-3">
                    <div class="input-group  mb-3">
                        <div class="input-group-prepend ">
                            <span class="input-group-text TextStyle" id="inputGroup-sizing-sm">Check In</span>
                        </div>
                        <input type="date" class="form-control " aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                    </div>
                </div>

                <div class = "col-6 col-md-3">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text TextStyle" id="inputGroup-sizing-sm">Check Out</span>
                        </div>
                        <input type="date" class="form-control " aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                    </div>
                </div>
                
                <div class = "col-6 col-md-3">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text TextStyle" id="inputGroup-sizing-sm">Guests</span>
                        </div>
                        <input type="number" class="form-control " aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder='0'/>
                    </div>
                </div>
                <div class = "col-6 col-md-3">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text TextStyle" id="inputGroup-sizing-sm">Rooms</span>
                        </div>
                        <input type="number" class="form-control " aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder='0'/>
                    </div>
                </div>
                   
            </div>

            <div class = "row mb-3">
                <div class = "col-4 d-flex justify-content-start">
                        <button class="btn dropdwn dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Price Range
                            </button>
                        
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <div class="rangebox">
                                <div class="color_gray">Min<br/>
                                    <input type="text"  placeholder="2000"  class="PriceRangeField" />
                                </div>
                                <div class="color_gray"> Max<br/>
                                    <input type="text"  placeholder="50000"  class="PriceRangeField" />
                                </div>
                            </div>
                        </ul>   
                </div>

                <div class = "col-4 d-flex justify-content-start">
                    
                    <button class="btn dropdwn dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Facilities
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label Checkdwn" for="flexCheckDefault">
                                Free Breakfast
                            </label> <br/>

                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label Checkdwn" for="flexCheckDefault">
                                Flat Screen TV
                            </label> <br/>

                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label Checkdwn" for="flexCheckDefault">
                                Free Wifi
                            </label> <br/>

                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label Checkdwn" for="flexCheckDefault">
                                Air Conditioning
                            </label>

                        </div>
                    </ul>   
                </div>

                <div class = "col-4 d-flex justify-content-start">
                        <button class="btn dropdwn dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Room Type
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <div class="form-check ">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label Checkdwn" for="flexCheckDefault">
                                    DELUXE
                                </label> <br/>

                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label Checkdwn" for="flexCheckDefault">
                                    STANDARD
                                </label> <br/>

                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label Checkdwn" for="flexCheckDefault">
                                    ECONOMY
                                </label> <br/>

                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label Checkdwn" for="flexCheckDefault">
                                    EXOTIC
                                </label>

                            </div>
                        </ul>   

                </div> 

            </div>
    
            <div class = "row-xs mb-3 d-flex justify-content-end">
            <button type="button" class="btn searchbtn btn-sm">Search</button>
            </div>

                <div class = "row">
                    <div class = "col">
                    <h3 class="pt-4 pb-1 searchtext text-start">Search Results | 12 Hotels </h3>
                    </div>

                    <div class = "col d-flex justify-content-end">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                            <label class="form-check-label" for="flexSwitchCheckDefault">Map View</label>
                        </div>
                    </div>
                </div>
           
        </div>
    );

}

export default Searchroom;