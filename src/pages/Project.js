import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Aplikasi Project React Js dan Node JS",
    description:
      "Ini adalah project pertama saya yang berisi aplikasi web e-commerce dengan React dan Node.js.",
    imageUrl:
      "https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
  },
  {
    id: 2,
    title: "Booking Hotel",
    description:
      "Ini adalah project kedua saya yang berisi aplikasi mobile untuk booking hotel dengan Flutter dan Firebase.",
    imageUrl:
      "https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 3,
    title: "Portofolio Website",
    description:
      "Ini adalah project ketiga saya yang berisi website portfolio dengan HTML, CSS, dan JavaScript.",
    imageUrl:
      "https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 4,
    title: "Aplikasi pemesanan makanan online",
    description:
      "Proyek ini adalah aplikasi mobile yang mengelola inventori restoran. Pengguna dapat memasukkan data makanan yang tersedia di restoran, mengelola pemesanan pelanggan, dan mengecek stok makanan yang tersedia.",
    imageUrl:
      "https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 5,
    title: "Platform berkolaborasi untuk tim",
    description:
      "Ini adalah situs web yang menyediakan platform untuk mengikuti kelas online. Pengguna dapat mendaftar untuk mengikuti kelas yang tersedia, mengakses materi pelajaran, dan mengerjakan tugas yang diberikan oleh instruktur.",
    imageUrl:
      "https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 6,
    title: "Aplikasi pemesanan makanan online",
    description:
      "Proyek ini adalah aplikasi sosial media yang mengikuti gaya hidup sehat. Pengguna dapat berbagi resep makanan sehat, bertukar tips olahraga, dan bergabung dalam komunitas yang terfokus pada gaya hidup sehat.",
    imageUrl:
      "https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 7,
    title: "Aplikasi pelacakan kesehatan",
    description:
      "Ini adalah platform e-learning yang memungkinkan pengguna untuk membuat dan mengikuti kursus online. Pengguna dapat membuat materi pelajaran, mengupload video, dan mengelola peserta kursus.",
    imageUrl:
      "https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 8,
    title: "Aplikasi belajar bahasa asing",
    description:
      "Proyek ini adalah aplikasi untuk membantu orang dalam mengelola keuangan pribadi. Pengguna dapat mencatat pengeluaran, mengelola anggaran, dan mengetahui pemasukan dan pengeluaran secara real-time.",
    imageUrl:
      "https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id.toString() === id);
  const navigate = useNavigate();
  return (
    <div className="project-detail">
      <div style={{ height: "140px" }}></div>

      <h1>{project.title}</h1>
      <img
        src={project.imageUrl}
        alt={project.title}
        loading="lazy"
        width={500}
      />
      <p>{project.description}</p>
      <button onClick={() => navigate(-1)}>Kembali</button>
    </div>
  );
}
