import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { EditingPositionFrame } from "../../../models/EditingPositionFrame";
import { PositionData } from "../../../models/PositionData";
import { PositionFrame } from "../../../models/PositionFrame";
import { PositionFramePositionDatasArgs } from "./args/PositionFramePositionDatasArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PositionFrame)
export class PositionFrameRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => EditingPositionFrame, {
    nullable: true
  })
  async editing(@TypeGraphQL.Root() positionFrame: PositionFrame, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<EditingPositionFrame | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).positionFrame.findUnique({
      where: {
        id: positionFrame.id,
      },
    }).editing({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PositionData], {
    nullable: false
  })
  async positionDatas(@TypeGraphQL.Root() positionFrame: PositionFrame, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PositionFramePositionDatasArgs): Promise<PositionData[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).positionFrame.findUnique({
      where: {
        id: positionFrame.id,
      },
    }).positionDatas({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
