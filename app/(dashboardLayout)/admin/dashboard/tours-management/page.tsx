import { queryStringFormatter } from "@/lib/formatters";
import { Suspense } from "react";
import TourCardSkeleton from "@/components/modules/Guide/GuideToursManagement/TourCardSkeleton";
import { getAllTours } from "@/services/admin/tourManagement";
import ToursManagementHeader from "@/components/modules/Admin/ToursManagement/ToursManagementHeader";
import AdminTourFilters from "@/components/modules/Admin/ToursManagement/AdminTourFilters";
import ToursViewMap from "@/components/shared/Tour/ToursViewMap";
import ToursPagination from "@/components/shared/Tour/ToursPagination";
import { getUserProfile } from "@/services/auth/getUserProfile";



const AdminToursManagementPage = async ({ searchParams, }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }>; }) => {
    const searchParamsObj = await searchParams;
    const queryString = queryStringFormatter(searchParamsObj);

    const toursResult = await getAllTours(queryString);
    const userInfo = await getUserProfile();

    const totalPages = Math.ceil(
        (toursResult?.meta?.total || 1) / (toursResult?.meta?.limit || 1)
    );


    return (
        <div className="space-y-6">
            <ToursManagementHeader />

            <AdminTourFilters />

            <Suspense fallback={<TourCardSkeleton items={8} />}>
                <ToursViewMap tours={toursResult.data} userInfo={userInfo} />
                <ToursPagination
                    currentPage={toursResult?.meta?.page || 1}
                    totalPages={totalPages}
                />
            </Suspense>
        </div>
    );
};

export default AdminToursManagementPage;
