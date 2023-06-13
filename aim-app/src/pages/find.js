import { useState } from "react";
import { FaDesktop, FaLaptop, FaMouse, FaPlus, FaPen, FaLock } from "react-icons/fa";

export default function Find() {
		const dummyData = [
			{
        name: "gregorius",
        pf: "00157900",
        location: "SS3",
        division: "IT",
				serialNumber: "X1122137",
				type: "desktop",
				hostname: "greg",
				os: "windows-10",
				ip: "10.0.0.37",
				other: "",
				status: "used",
				remarks: "good"
			},
			{
        name: "anjar",
        pf: "00267000",
        location: "SS3",
        division: "IT",
				serialNumber: "X2456123",
				type: "laptop",
				hostname: "anjar",
				os: "windows-10",
				ip: "10.0.0.45",
				other: "",
				status: "used",
				remarks: "good"
			},
			{
        name: "abas",
        pf: "00345000",
        location: "SS3",
        division: "CSO",
				serialNumber: "X3567234",
				type: "other",
				hostname: "",
				os: "",
				ip: "",
				other: "mouse",
				status: "used",
				remarks: "good"
			},
      {
        name: "kevin",
        pf: "00145000",
        location: "SS3",
        division: "IT",
				serialNumber: "X3567234",
				type: "other",
				hostname: "",
				os: "",
				ip: "",
				other: "mouse",
				status: "used",
				remarks: "good"
			},
      {
        name: "fani",
        pf: "00295000",
        location: "SS3",
        division: "CSO",
				serialNumber: "X3567234",
				type: "other",
				hostname: "",
				os: "",
				ip: "",
				other: "mouse",
				status: "used",
				remarks: "good"
			},
		]

    const [name, setName] = useState("")
    const [pf, setPf] = useState("")
    const [location, setLocation] = useState("")
    const [division, setDivision] = useState("")
		const [serialNumber, setSerialNumber] = useState("")
    const [type, setType] = useState("desktop")
		const [hostname, setHostname] = useState("")
		const [os, setOs] = useState("")
		const [ip, setIp] = useState("")
		const [other, setOther] = useState("")
		const [status, setStatus] = useState("")
		const [remarks, setRemarks] = useState("")
		const [data, setData] = useState(dummyData)

    const [editMode, setEditMode] = useState(false)

    const handleChangeType = (e) => {
        setType(e.target.value)
    }

		const handleChangeStatus = (e) => {
			setStatus(e.target.value)
		}

    const handleClickDatum = (datum) => {
      setName(datum.name)
      setPf(datum.pf)
      setLocation(datum.location)
      setDivision(datum.division)
      setSerialNumber(datum.serialNumber)
      setType(datum.type)
      setHostname(datum.hostname)
      setOs(datum.os)
      setIp(datum.ip)
      setOther(datum.other)
      setStatus(datum.status)
      setRemarks(datum.remarks)
    }

		const assetComponent = (type, serialNumber) => {
			return (
				<div class="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline my-2 flex items-center">
					{(type === "desktop") &&
						<FaDesktop/>
					}
					{(type === "laptop") &&
						<FaLaptop/>
					}
					{(type === "other") &&
						<FaMouse/>
					}
					<p class="ml-2">{serialNumber}</p>
				</div>
			)
		}

    return (
      <div class="h-screen mx-36 px-8 pt-6 pb-8 mb-4 flex flex-col">
        <p class="text-2xl font-bold mb-2 text-center">Find Data</p>
        <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <table class="table-fixed border-collapse border border-slate-400">
          <thead>
            <tr class="bg-slate-200 text-slate-700">
              <th class="border border-slate-300 p-2">Name</th>
              <th class="border border-slate-300 p-2">PF Number</th>
              <th class="border border-slate-300 p-2">Location</th>
              <th class="border border-slate-300 p-2">Division</th>
              <th class="border border-slate-300 p-2">Serial Number</th>
              <th class="border border-slate-300 p-2">Type</th>
              <th class="border border-slate-300 p-2">Other Type</th>
              <th class="border border-slate-300 p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((datum, index) => (
              <tr 
                class={`hover:bg-gray-300 cursor-pointer ${index % 2 == 1 && "bg-slate-100"}`} 
                data-modal-target="defaultModal" 
                data-modal-toggle="defaultModal"
                onClick={() => handleClickDatum(datum)}
              >
                <td class="border border-slate-300 p-2">{datum.name}</td>
                <td class="border border-slate-300 p-2">{datum.pf}</td>
                <td class="border border-slate-300 p-2">{datum.location}</td>
                <td class="border border-slate-300 p-2">{datum.division}</td>
                <td class="border border-slate-300 p-2">{datum.serialNumber}</td>
                <td class="border border-slate-300 p-2">{datum.type}</td>
                <td class="border border-slate-300 p-2">{datum.other !== "" ? datum.other : "-"}</td>
                <td class="border border-slate-300 p-2">{datum.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

				{/* <!-- Main modal --> */}
				<div id="defaultModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
					<div class="relative w-full max-w-3xl max-h-full">
						{/* <!-- Modal content --> */}
						<form class="relative bg-white rounded-lg shadow dark:bg-gray-700">
							{/* <!-- Modal header --> */}
							<div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <div class="flex items-center">
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mr-2">
                    Data Detail
                  </h3>
                  {(!editMode) ?
                    <div 
                      onClick={() => setEditMode(!editMode)}
                      class="flex cursor-pointer items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <FaPen/>
                      <p class="ml-1">Activate Edit Mode</p>
                    </div>
                  :
                    <div 
                      onClick={() => setEditMode(!editMode)}
                      class="flex cursor-pointer items-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      <FaLock/>
                      <p class="ml-1">Deactivate Edit Mode</p>
                    </div>
                  }
                </div>
								<button 
                  type="button" 
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" 
                  data-modal-hide="defaultModal"
                  onClick={() => setEditMode(false)}
                >
									<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
									<span class="sr-only">Close modal</span>
								</button>
							</div>
							{/* <!-- Modal body --> */}
							<div class="flex">
								<div class="p-6 space-y-6 flex flex-col">
                  <div class="">
                    <label class="block text-gray-700 text-sm mb-2 text-left" for="name">
                      Name
                    </label>
                    <input 
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name" 
                      type="text" 
                      placeholder="Name"
                      disabled={!editMode}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div class="mb-4 mt-8">
                    <label class="block text-gray-700 text-sm mb-2 text-left" for="pf">
                      PF Number
                    </label>
                    <input 
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                      id="pf" 
                      type="text" 
                      placeholder="PF Number"
                      disabled={!editMode}
                      value={pf}
                      onChange={(e) => setPf(e.target.value)}
                    />
                  </div>
                  <div class="mb-4 mt-8">
                    <label class="block text-gray-700 text-sm mb-2 text-left" for="location">
                      Location
                    </label>
                    <input 
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                      id="location" 
                      type="text" 
                      placeholder="Location"
                      disabled={!editMode}
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                  <div class="mb-4 mt-8">
                    <label class="block text-gray-700 text-sm mb-2 text-left" for="division">
                      Division
                    </label>
                    <input 
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                      id="division" 
                      type="text" 
                      placeholder="Division"
                      value={division}
                      onChange={(e) => setDivision(e.target.value)}
                    />
                  </div>
                </div>
                <div class="p-6 space-y-6 flex flex-col">
									<div class="flex flex-col">
										<label class="block text-gray-700 text-sm mb-2 text-left" for="sn">
											Serial Number
										</label>
										<input 
											class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
											id="sn" 
											type="text" 
											placeholder="Serial Number"
											value={serialNumber}
											onChange={(e) => setSerialNumber(e.target.value)}
                      disabled={!editMode}
										/>
									</div>
									<label class="block text-gray-700 text-sm mb-2 text-left" for="type">
										Type
									</label>
									<select disabled={!editMode} id="type" onChange={handleChangeType} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" style={{marginBlockStart: "8px"}}>
										<option value="desktop">Desktop</option>
										<option value="laptop">Laptop</option>
										<option value="other">Other</option>
									</select>
									{(type === "desktop" || type === "laptop") &&
										<>
											<div class="mb-4 mt-8 flex flex-col">
												<label class="block text-gray-700 text-sm mb-2 text-left" for="hostname">
													Hostname
												</label>
												<input 
													class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
													id="hostname"
													type="text"
													placeholder="Hostname"
													value={hostname}
													onChange={(e) => setHostname(e.target.value)}
                          disabled={!editMode}
												/>
											</div>
											<div class="mb-4 mt-8 flex flex-col">
												<label class="block text-gray-700 text-sm mb-2 text-left" for="os">
													OS/Model
												</label>
												<input 
													class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
													id="os"
													type="text"
													placeholder="OS/Model"
													value={os}
													onChange={(e) => setOs(e.target.value)}
                          disabled={!editMode}
												/>
											</div>
											<div class="mb-4 mt-8 flex flex-col">
												<label class="block text-gray-700 text-sm mb-2 text-left" for="ip">
													IP/Mac Address
												</label>
												<input 
													class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
													id="ip"
													type="text"
													placeholder="IP/Mac Address"
													value={ip}
													onChange={(e) => setIp(e.target.value)}
                          disabled={!editMode}
												/>
											</div>
										</>
									}
									{(type === "other") &&
										<>
											<div class="mb-4 mt-8 flex flex-col">
												<label class="block text-gray-700 text-sm mb-2 text-left" for="other">
													Other Type
												</label>
												<input 
													class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
													id="other"
													type="text"
													placeholder="Other Type"
													value={other}
													onChange={(e) => setOther(e.target.value)}
                          disabled={!editMode}
												/>
											</div>
										</>
									}
								</div>
								<div class="p-6 space-y-6 flex flex-col">
									<label class="block text-gray-700 text-sm text-left" for="status">
										Status
									</label>
									<select disabled={!editMode} id="status" onChange={handleChangeStatus} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" style={{marginBlockStart: "8px"}}>
										<option value="used">Used</option>
										<option value="backup">Backup</option>
									</select>
									<label class="block text-gray-700 text-sm mb-2 text-left" for="remarks">
										Remarks
									</label>
									<input 
										class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										id="remarks"
										type="text"
										placeholder="Remarks"
										value={remarks}
										onChange={(e) => setRemarks(e.target.value)}
										style={{marginBlockStart: "8px"}}
                    disabled={!editMode}
									/>
								</div>
							</div>
							{/* <!-- Modal footer --> */}
							<div class="flex justify-between items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <div>
                  <button 
                    type="button" 
                    class="text-red-600 hover:text-white border border-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                  >
                    Delete
                  </button>
                </div>
                <div>
                  {(editMode) &&
								    <button 
                      type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={() => setEditMode(false)}                    
                    >
                      Edit
                    </button>
                  }
                  <button 
                    data-modal-hide="defaultModal" 
                    type="button" 
                    class="ml-2 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                    onClick={() => setEditMode(false)} 
                  >
                    Cancel
                  </button>
                </div>
              </div>
						</form>
					</div>
				</div>

      </div>
    );
  }
  