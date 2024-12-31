import { useNavigate } from 'react-router-dom';
import OrderManagementTable from './OrderManagementTable';
import ProductManagementTable from './ProductManagementTable';
import MemberManagementTable from './MemberManagementTable';
import SettlementManagementTable from './SettlementManagementTable';
import PromotionManagementTable from './PromotionManagementTable';
import SettingManagementTable from './SettingManagementTable';

function AuthoritySettings() {
  const navigate = useNavigate();

  const handleSave = () => {
    // 권한 설정 저장 로직 구현 (API 호출 등)
    console.log('권한 설정이 저장되었습니다.');
    // 필요한 로직에 따라 API 호출 또는 저장처리
  };

  const handleGoBack = () => {
    navigate('/admin/sub-admin-authority-management'); // 목록 페이지로 돌아가기
  };

  return (
    <div className="p-6 bg-white">
      <table className="table-auto w-full border-collapse mb-8">
        <tr>
          <td>
            <OrderManagementTable />
            <ProductManagementTable />
            <MemberManagementTable />
            <SettlementManagementTable />
            <PromotionManagementTable />
            <SettingManagementTable />
          </td>
        </tr>
      </table>

      {/* 저장 버튼과 목록으로 돌아가기 버튼 */}
      <div className="flex justify-end space-x-4">
        <button
          onClick={handleGoBack}
          className="bg-gray-400 text-white px-4 py-2 rounded"
        >
          목록으로 돌아가기
        </button>
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          저장
        </button>
      </div>
    </div>
  );
}

export default AuthoritySettings;
