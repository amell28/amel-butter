const PersonalInfo = () => {
  return (
    <div className="personal-info">
      <h2>Informasi Pribadi</h2>
      <div className="info-item">
        <span className="info-label">Nama Lengkap:</span>
        <span className="info-value">Siti Amelia Larasati</span>
      </div>
      <div className="info-item">
        <span className="info-label">Tanggal Lahir:</span>
        <span className="info-value">28 Juni 2006</span>
      </div>
      <div className="info-item">
        <span className="info-label">Tempat Lahir:</span>
        <span className="info-value">Pekanbaru</span>
      </div>
      <div className="info-item">
        <span className="info-label">Umur:</span>
        <span className="info-value">19 Tahun</span>
      </div>
      <div className="info-item">
        <span className="info-label">Jenis Kelamin:</span>
        <span className="info-value">Perempuan</span>
      </div>
    </div>
  )
}

export default PersonalInfo