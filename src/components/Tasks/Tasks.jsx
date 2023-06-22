import "./index.scss";
import trash from "../../assets/trash.png";
import pencil from "../../assets/pencil.png";
import { useState } from "react";

export default function Tasks({ data }) {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalTrash, setShowModalTrash] = useState(false);
  const [showModalNew, setShowModalNew] = useState(false);

  return (
    <div className="containerTable">
      <table
        id="tfhover"
        className="tftable"
        style={{
          display:
            showModalEdit || showModalNew || showModalTrash ? "none" : "table",
        }}
      >
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
            </td>
          </tr>
        ))}
        <tr className="tr">
          <td className="tr__tdNew">Nova Tarefa...</td>
          <td className="add" onClick={() => setShowModalNew(true)}>
            +
          </td>
        </tr>
      </table>
      {showModalEdit && (
        <div className="modal__container">
          <div className="modal__container__content">
            <div
              className="modal__container__content--close"
              onClick={() => setShowModalEdit(false)}
            >
              <h2>X</h2>
            </div>
            <h1>Deseja editar esse item?</h1>
            <div className="modal__container__content__buttons">
              <button className="no" onClick={() => setShowModalEdit(false)}>
                Não
              </button>
              <button className="yes">Sim</button>
            </div>
          </div>
        </div>
      )}
      {showModalTrash && (
        <div className="modal__container">
          <div className="modal__container__content">
            <div
              className="modal__container__content--close"
              onClick={() => setShowModalTrash(false)}
            >
              <h2>X</h2>
            </div>
            <h1>Deseja excluir esse item?</h1>
            <div className="modal__container__content__buttons">
              <button className="no" onClick={() => setShowModalTrash(false)}>
                Não
              </button>
              <button className="yes">Sim</button>
            </div>
          </div>
        </div>
      )}
      {showModalNew && (
        <div className="modal__containerNew">
          <div className="modal__containerNew__content">
            <div
              className="modal__containerNew__content--close"
              onClick={() => setShowModalNew(false)}
            >
              <h2>X</h2>
            </div>
            <h1>Deseja adicionar uma tarefa?</h1>
            <label>
              <input type="text" placeholder="Digite o nome tarefa..." />
            </label>
            <div className="modal__containerNew__content__buttons">
              <button className="no" onClick={() => setShowModalNew(false)}>
                Não
              </button>
              <button className="yes">Sim</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
