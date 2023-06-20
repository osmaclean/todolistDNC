import "./index.scss";
import trash from "../../assets/trash.png";
import pencil from "../../assets/pencil.png";

export default function Tasks({ data }) {
  return (
    <div className="containerTable">
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
              <img src={pencil}></img>
              <img src={trash}></img>
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
