import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Road = () => {
	return (
		<div>
			<div className="w-full h-8/12 p-12">
				<MapContainer
					center={[46.71109, 1.7191036]}
					zoom={10}
					scrollWheelZoom={false}
					style={{ width: '100%', height: 'calc(100vh - 4rem)' }}
				>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						// url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						url="../../../public/France/{z}/{x}/{y}.png"
					/>
					<Marker position={[43.6, 1.433333]}>
						<Popup>
							A pretty CSS3 popup. <br /> Easily customizable.
						</Popup>
					</Marker>
				</MapContainer>
			</div>
		</div>
	);
};

export default Road;
