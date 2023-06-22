import "./index.scss";
import trash from "../../assets/trash.png";
import pencil from "../../assets/pencil.png";
import { useState } from "react";

export default function Tasks({ data }) {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalTrash, setShowModalTrash] = useState(false);
  return (
    <div
      className="containerTable"
      onClick={() => {
        if (showModalEdit) setShowModalEdit(false);
        if (showModalTrash) setShowModalTrash(false);
      }}
    >
      <table id="tfhover" className="tftable">
        <tr>
          <th>Tarefa</th>
          <th>Status</th>
          <th>Opções</th>
        </tr>
        {data.map((obj) => (
          <tr key={obj.id}>
            <td className="tr__td">{obj.title}</td>
            <td className="check">
              <input type="checkbox" />
            </td>
            <td>
              <img onClick={() => setShowModalEdit(true)} src={pencil}></img>
              <img onClick={() => setShowModalTrash(true)} src={trash}></img>

              {showModalEdit && (
                <div className="modal__container">
                  <div className="modal__container__content">
                    <h1>Teste</h1>
                  </div>
                </div>
              )}
              {showModalTrash && (
                <div className="modal__container">
                  <div className="modal__container__content">
                    <h1>Teste 2</h1>
                  </div>
                </div>
              )}
            </td>
          </tr>
        ))}
        <tr className="tr">
          <td className="tr__tdNew">Nova Tarefa...</td>
          <td className="add">+</td>
        </tr>
      </table>
    </div>
  );
}
