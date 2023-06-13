import { useState } from "react";
import { FaDesktop, FaLaptop, FaMouse, FaPlus, FaTrash } from "react-icons/fa";

export default function Create() {
		const dummyAssets = [
			{
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

		const [serialNumber, setSerialNumber] = useState("")
    const [type, setType] = useState("desktop")
		const [hostname, setHostname] = useState("")
		const [os, setOs] = useState("")
		const [ip, setIp] = useState("")
		const [other, setOther] = useState("")
		const [status, setStatus] = useState("")
		const [remarks, setRemarks] = useState("")
		const [assets, setAssets] = useState(dummyAssets)

    const handleChangeType = (e) => {
        setType(e.target.value)
    }

		const handleChangeStatus = (e) => {
			setStatus(e.target.value)
		}

		const assetComponent = (type, serialNumber, index) => {
			return (
				<div class="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline my-2 flex items-center justify-between">
					<div class="flex items-center">
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
					<div 
						class="text-red-600 hover:text-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-900"
						onClick={() => handleDeleteAsset(index)}
					>
						<FaTrash 
							class="cursor-pointer"
						/>
					</div>
				</div>
			)
		}

		const handleAddAsset = () => {
			setAssets([...assets, {
				serialNumber: serialNumber,
				type: type,
				hostname: hostname,
				os: os,
				ip: ip,
				other: other,
				status: status,
				remarks: remarks
			}])
		}

		const handleDeleteAsset = (index) => {
			let tempAssets = assets
			tempAssets.splice(index, 1)
			console.log(tempAssets)
			setAssets([...tempAssets])
		}

    return (
      <div class="h-screen mx-36">
        <form class="bg-white px-8 pt-6 pb-8 mb-4">
          <p class="text-2xl font-bold mb-2 text-center">New Data</p>
					<hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
					<div class="flex justify-center">
						<div class="shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-4">
							<p class="text-lg font-bold">User Identity</p>
							<div class="mb-4 mt-8">
								<label class="block text-gray-700 text-sm mb-2 text-left" for="name">
									Name
								</label>
								<input class="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name"/>
							</div>
							<div class="mb-4 mt-8">
								<label class="block text-gray-700 text-sm mb-2 text-left" for="pf">
									PF Number
								</label>
								<input class="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="pf" type="text" placeholder="PF Number"/>
							</div>
							<div class="mb-4 mt-8">
								<label class="block text-gray-700 text-sm mb-2 text-left" for="location">
									Location
								</label>
								<input class="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="location" type="text" placeholder="Location"/>
							</div>
							<div class="mb-4 mt-8">
								<label class="block text-gray-700 text-sm mb-2 text-left" for="division">
									Division
								</label>
								<input class="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="division" type="text" placeholder="Division"/>
							</div>
						</div>
						<div class="shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-4 flex flex-col items-center">
							<p class="text-lg font-bold mb-2">Assets</p>
							{assets.length == 0 &&
								<p class="w-80 text-center text-gray-700">Belum ada asset</p>
							}
							{assets.map((asset, idx) => assetComponent(asset.type, asset.serialNumber, idx))}
							{/* <!-- Modal toggle --> */}
							<button data-modal-target="defaultModal" data-modal-toggle="defaultModal" class="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4" type="button">
								<FaPlus/>
								<p class="ml-1.5">Add asset</p>
							</button>
						</div>
					</div>
					<div class="flex justify-center">
						<button data-modal-target="defaultModal" data-modal-toggle="defaultModal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4" type="button">
							Create
						</button>
					</div>
        </form>

				{/* <!-- Main modal --> */}
				<div id="defaultModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
					<div class="relative w-full max-w-lg max-h-full">
						{/* <!-- Modal content --> */}
						<form class="relative bg-white rounded-lg shadow dark:bg-gray-700">
							{/* <!-- Modal header --> */}
							<div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
								<h3 class="text-xl font-semibold text-gray-900 dark:text-white">
									New Asset
								</h3>
								<button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
									<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
									<span class="sr-only">Close modal</span>
								</button>
							</div>
							{/* <!-- Modal body --> */}
							<div class="flex">
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
										/>
									</div>
									<label class="block text-gray-700 text-sm mb-2 text-left" for="type">
										Type
									</label>
									<select id="type" onChange={handleChangeType} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" style={{marginBlockStart: "8px"}}>
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
												/>
											</div>
										</>
									}
								</div>
								<div class="p-6 space-y-6 flex flex-col">
									<label class="block text-gray-700 text-sm text-left" for="status">
										Status
									</label>
									<select id="status" onChange={handleChangeStatus} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" style={{marginBlockStart: "8px"}}>
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
									/>
								</div>
							</div>
							{/* <!-- Modal footer --> */}
							<div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
								<button data-modal-hide="defaultModal" type="button" onClick={handleAddAsset} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
								<button data-modal-hide="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancel</button>
							</div>
						</form>
					</div>
				</div>

      </div>
    );
  }
  