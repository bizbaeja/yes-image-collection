import React,{ useState} from "react";
import SubHeader from "../SubHeader";
function RegionalRegister({}) {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files.length > 0) {
        setSelectedFile(event.target.files[0]);
      }
    };
  
 
  return <div className="container mx-auto p-4">
       {/* 테이블 레이아웃 */}
 
        <SubHeader title="도서산간지역 등록"
        />
       <table className="table-auto w-full mb-6 border-collapse border">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2 font-bold">엑셀 파일</th>
            <th className="text-left p-2">파일 선택</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">
              <a href="#" className="text-blue-500 underline">[양식 파일 다운로드]</a>
            </td>
            <td className="p-2">
              <input type="file" onChange={handleFileChange} />
              <span className="ml-2 text-gray-500">{selectedFile ? selectedFile.name : '선택된 파일 없음'}</span>
            </td>
          </tr>
        </tbody>
      </table>

  </div>;
}

export default RegionalRegister;
